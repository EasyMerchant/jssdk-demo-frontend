import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './sidebar';
import CodeView from './codeView';
import ResponsiveButton from './ResponsiveButton';
import { defaultOptions } from '../utils/common';

const PaymentOptions = () => {
  let elements;
  const [loading, setLoading] = useState(false);
  const [showObject, setShowObject] = useState(false);
  const paymentsRef = useRef(null);
  const [customizeOptions, setCustomizeOptions] = useState((localStorage.getItem("customizeOptions") && JSON.parse(localStorage.getItem("customizeOptions"))) || defaultOptions);

  async function initialize() {
    document.getElementById("payments").innerHTML = '';
    setLoading(true);
    try {
      let amount = customizeOptions.amount; // please replace the value with amount provided on demo page
      const response = await fetch("/.netlify/functions/paymentIntent", {
        method: 'POST',
        body: JSON.stringify({ amount }),
      });
      const json = await response.json();
      let client_token = json.body.client_token;

      elements = new lyfPayCheckout(client_token);
      elements.create({
        ...customizeOptions,
        amount,
        environment: json.env
      });

      // On Ready Event -  it will trigger once all elements render successfully
      elements.on('ready', (event) => {
        localStorage.setItem("customizeOptions", JSON.stringify(customizeOptions));
        setLoading(false);
        console.log("Ready", event)
      });


      // On Done Event - it will trigger once payment successfully done
      elements.on('done', (event) => {
        console.log("Done", event)

      });

      // On Donde Event - it will trigger once payment successfully done
      elements.on('error', (event) => {
        console.log("Error", event)
      });

      elements.on('processing', (event) => {
        console.log("Processing", event)
      });
    }
    catch (err) {
      console.log("Javascript Errror", err)
      localStorage.setItem("customizeOptions", JSON.stringify(customizeOptions));
      setLoading(false);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const toggleShowObject = () => setShowObject((pervVal) => !pervVal);

  return (
    <div className='flex bg-[#F7F7F7] dark:bg-gray-800 dark:text-white'>
      <Sidebar customizeOptions={ customizeOptions }
        setCustomizeOptions={ setCustomizeOptions }
        handleRenderUpdate={ initialize }
        toggleShowObject={ toggleShowObject }
        showObject={ showObject }
      />
      <div className='relative w-1-392 gap-0 flex flex-col justify-center items-center'>
        { loading &&
          <div className='flex w-full h-dvh absolute top-0 left-0 justify-center items-center bg-white z-10'>
            <div
              className="w-12 h-12 rounded-full animate-spin border-y border-solid border-cyan-500 border-t-transparent shadow-md">
            </div>
          </div>
        }
        { showObject && <CodeView toggleShowObject={ toggleShowObject } customizeOptions={ customizeOptions } /> }
        <ResponsiveButton paymentsRef={ paymentsRef } />
        <div id="payments" ref={ paymentsRef } className='w-full transition-all'></div>
      </div>
    </div>
  )
}

export default PaymentOptions;

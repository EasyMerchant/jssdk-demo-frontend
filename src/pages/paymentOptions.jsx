import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './sidebar';
import CodeView from './codeView';
import ResponsiveButton from './ResponsiveButton';
import { defaultOptions, defaultOptionsToggle } from '../utils/common';

const PaymentOptions = () => {
  let elements = useRef(null);
  let readyCallback, doneCallback, errorCallback, processingCallback; // Store references to the callbacks
  const [loading, setLoading] = useState(false);
  const [showObject, setShowObject] = useState(false);
  const paymentsRef = useRef(null);
  const [customizeOptions, setCustomizeOptions] = useState(
    (localStorage.getItem('customizeOptions') && JSON.parse(localStorage.getItem('customizeOptions'))) || defaultOptions
  );
  const [optionsToggle, setOptionsToggle] = useState((localStorage.getItem('optionsToggle') && JSON.parse(localStorage.getItem('optionsToggle'))) || defaultOptionsToggle);

  const setLocalValue = () => {
    localStorage.setItem('customizeOptions', JSON.stringify(customizeOptions));
    localStorage.setItem('optionsToggle', JSON.stringify(optionsToggle));
  }


  async function initialize() {
    try {
      document.getElementById('payments').innerHTML = '';
      setLoading(true);
      let amount = customizeOptions.amount; // please replace the value with amount provided on demo page
      const response = await fetch("/.netlify/functions/paymentIntent", {
        method: 'POST',
        body: JSON.stringify({ amount }),
      });
      const json = await response.json();
      let client_token = json.body.client_token;

      if (!elements.current) {
        elements.current = new lyfPayCheckout(client_token);
      } else {
        // Force clear the event map for "ready" as a fallback
        elements.current.eventMap.set('ready', []);
        elements.current.eventMap.set('done', []);
        elements.current.eventMap.set('error', []);
        elements.current.eventMap.set('processing', []);
      }

      elements.current.create({
        ...customizeOptions,
        amount,
        environment: json.env
      });

      // Define callback functions
      readyCallback = (event) => {
        setLocalValue();
        setLoading(false);
      };

      errorCallback = (event) => {
        console.error('Error', event);
        setLoading(false);
      };

      // Add event listeners
      elements.current.on('ready', readyCallback);
      elements.current.on('done', doneCallback);
      elements.current.on('error', errorCallback);
      elements.current.on('processing', processingCallback);
    } catch (err) {
      console.error('Error in initialize:', err);
      setLocalValue();
      setLoading(false);
    }
  }



  useEffect(() => {
    initialize();
    return () => { };
  }, []);

  const toggleShowObject = () => setShowObject((prevVal) => !prevVal);

  return (
    <div className="flex bg-[#F7F7F7] dark:bg-gray-800 dark:text-white">
      <Sidebar
        customizeOptions={ customizeOptions }
        setCustomizeOptions={ setCustomizeOptions }
        handleRenderUpdate={ initialize }
        toggleShowObject={ toggleShowObject }
        showObject={ showObject }
        optionsToggle={ optionsToggle }
        setOptionsToggle={ setOptionsToggle }
      />
      <div className="relative w-1-392 gap-0 flex flex-col justify-center items-center">
        { loading && (
          <div className="flex w-full h-dvh absolute top-0 left-0 justify-center items-center bg-white z-10">
            <div className="w-12 h-12 rounded-full animate-spin border-y border-solid border-cyan-500 border-t-transparent shadow-md"></div>
          </div>
        ) }
        { showObject && <CodeView toggleShowObject={ toggleShowObject } customizeOptions={ customizeOptions } /> }
        <ResponsiveButton paymentsRef={ paymentsRef } />
        <div id="payments" ref={ paymentsRef } className="w-full transition-all"></div>
      </div>
    </div>
  );
};

export default PaymentOptions;

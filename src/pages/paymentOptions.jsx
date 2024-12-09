import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './sidebar';
import CodeView from './codeView';
import ResponsiveButton from './ResponsiveButton';

const PaymentOptions = () => {
  let elements;
  const [loading, setLoading] = useState(false);
  const [showObject, setShowObject] = useState(false);
  const paymentsRef = useRef(null);
  const [customizeOptions, setCustomizeOptions] = useState({
    container: 'payments',
    environment: "stage",
    amount: 55.68,
    tokenOnly: true,
    currency: "usd",
    saveCard: true,
    scanCard: true,
    saveAccount: true,
    submitButtonText: "Submit",
    showReceipt: true,
    showTotal: true,
    showSubmitButton: true,
    paymentMethods: ['card', "ach", "crypto", "wallet"],
    fields: {
      billing: [
        { name: 'address', required: true, value: 'Test ACH Address' },
        { name: 'country', required: true, value: 'Country' },
        { name: 'state', required: true, value: '' },
        { name: 'city', required: false, value: '' },
        { name: 'postal_code', required: true, value: '' },
      ],
      additional: [
        { name: 'name', required: true, value: '' },
        { name: 'email_address', required: true, value: '' },
        { name: 'phone_number', required: true, value: '' },
        { name: 'description', required: true, value: '' },
        { name: 'donate', required: false }
      ]
    },
    apperanceSettings: {
      bodyBackgroundColor: "#eeeff2",
      containerBackgroundColor: "#ffffff",
      primaryFontColor: "#000000",
      secondaryFontColor: "#666666",
      primaryButtonBackgroundColor: "#1757d9",
      primaryButtonHoverColor: "#3a70df",
      primaryButtonFontColor: "#ffffff",
      secondaryButtonBackgroundColor: "#ffffff",
      secondaryButtonHoverColor: "#1757d9",
      secondaryButtonFontColor: "#1757d9",
      theme: "light",
      fontSize: "16",
      borderRadious: "8",
    }
  });

  async function initialize() {
    document.getElementById("payments").innerHTML = '';
    setLoading(true);
    try {
      const { client_token, amount } = await fetch("http://localhost:5000/create.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then((r) => r.json());

      elements = new lyfPayCheckout(client_token);
      elements.create({
        ...customizeOptions,
        amount
      });

      // On Ready Event -  it will trigger once all elements render successfully
      elements.on('ready', (event) => {
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
      setLoading(false);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const toggleShowObject = () => setShowObject((pervVal) => !pervVal);

  return (
    <div className='flex  bg-[#F7F7F7]  dark:bg-gray-800 dark:text-white'>
      <Sidebar customizeOptions={ customizeOptions }
        setCustomizeOptions={ setCustomizeOptions }
        handleRenderUpdate={ initialize }
        toggleShowObject={ toggleShowObject }
        showObject={ showObject }
      />
      <div className='relative w-1-392 gap-3 flex flex-col justify-center items-center'>
        { loading &&
          <div className='flex w-full h-dvh absolute top-0 left-0 justify-center items-center bg-white z-10'>
            <div
              className="w-12 h-12 rounded-full animate-spin border-y border-solid border-cyan-500 border-t-transparent shadow-md">
            </div>
          </div>
        }
        { showObject && <CodeView toggleShowObject={toggleShowObject} customizeOptions={ customizeOptions } /> }
        <ResponsiveButton paymentsRef={paymentsRef} />
        <div id="payments"  ref={paymentsRef} className='w-full transition-all'></div>
        </div>
    </div>
  )
}

export default PaymentOptions;
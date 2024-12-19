import React, { useState } from 'react';
import { useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeView = ({ customizeOptions, toggleShowObject }) => {
    const [copied, setCopied] = useState(false);
    const [steps, setStep] = useState(1);

    const copyToClipboard = () => {
        const code = `<script type="text/javascript">
var elements = new lyfPayCheckout("{{client_token}}");
elements.create(${JSON.stringify(customizeOptions, null, 2)})
</script> `;
        navigator.clipboard.writeText(code)
            .then(() => setCopied(true))
            .catch(() => setCopied(false));
        setTimeout(() => {
            setCopied(false);
            toggleShowObject();
        }, 1000);
    };

    useEffect(() => {
        return () => clearTimeout();
    }, []);

    return (
        <div className="w-full absolute h-screen overflow-y-auto top-0 left-0 justify-center items-center bg-gray-100 z-20">
            { steps === 1 ? (
                <div className="w-full flex flex-col py-10 gap-4 px-6">
                    <div>
                        <div className='pb-6 text-xl font-bold text-indigo-600'>Step 1: Generate Client Token</div>
                        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
                            <div className="space-y-4">
                                <div className="space-x-2">
                                    <span className="font-semibold">API URL</span>
                                    <div className='bg-gray-800 p-4 rounded-lg'>
                                        <span className="bg-gray-800 text-green-400 rounded-lg py-1 px-3 text-sm">
                                            <span className='text-[#f8c555]'>POST </span>&nbsp;<span className="token string">"https://api.lyfepay.io/api/v1/paymentintent"</span>
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <span className="font-semibold">Request Params</span>
                                    <div className="bg-gray-800 p-4 rounded-lg">
                                        <pre className="text-green-400">
                                            <span>{ `{` } <br /></span>
                                            <span className='text-[#f8c555]'>"amount"</span><span>: "{customizeOptions.amount}" // optional</span> <br />
                                            <span>{ `}` }</span>
                                        </pre>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <span className="font-semibold">API Response</span>
                                    <div className="bg-gray-800 p-4 rounded-lg">
                                        <pre className="text-green-400">
                                            <span>{ `{` }</span><br />
                                            <span className='text-[#f8c555]'>"status"</span>: true,<br />
                                            <span className='text-[#f8c555]'>"message"</span>: "Payment Intent created successfully.",<br />
                                            <span className='text-[#f8c555]'>"payment_intent"</span>: "pi_862136128h9ad",<br />
                                            <span className='text-[#f8c555]'>"client_token"</span>: "token_6631160909c7eb"<br />
                                            <span>{ `}` }</span>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end gap-2'>
                        <button
                            type="button"
                            onClick={ () => toggleShowObject() }
                            className="py-2.5 px-5 text-sm bg-indigo-500 text-white rounded-md cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 flex items-center hover:bg-indigo-700"
                        >
                            Close
                        </button>
                        <button
                            type='button'
                            onClick={ () => setStep(2) }
                            className="relative inline-flex rounded-md items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold bg-indigo-500 text-white transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 hover:bg-indigo-700 group">
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg
                                    className="w-5 h-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={ 24 }
                                    height={ 24 }
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M14.9385 6L20.9999 12.0613M20.9999 12.0613L14.9385 18.1227M20.9999 12.0613L3 12.0613"
                                        stroke="currentcolor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg
                                    className="w-5 h-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={ 24 }
                                    height={ 24 }
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M14.9385 6L20.9999 12.0613M20.9999 12.0613L14.9385 18.1227M20.9999 12.0613L3 12.0613"
                                        stroke="currentcolor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                Next
                            </span>
                        </button>
                    </div>
                </div>
            ) : steps === 2 ? (
                <div className="w-full flex flex-col py-10 gap-4 px-6">
                    <div>
                        <div className='pb-6 text-xl font-bold text-indigo-600'>Step 2: Configure Hosted Checkout</div>
                        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
                            <div className="space-y-4">
                                <div className="space-x-2">
                                    <span className="my-3 inline-block font-normal">Add the JS SDK checkout.js script on your payment page by adding it to the head of your HTML</span>
                                    <div className='bg-gray-800 p-4 rounded-lg'>
                                        <pre className="language-js max-h-[200px] overflow-auto scrollbar scrollbar-w-[10px] scrollbar-h-[10px] dark:scrollbar-thumb-gray-600 scrollbar-thumb-gray-500 dark:scrollbar-track-gray-900 scrollbar-track-gray-800">
                                            <code>
                                                <span className="text-[#67cdcc]">&lt;</span>script src
                                                <span className="text-[#67cdcc]">=</span>
                                                <span className="text-[#7ec699]">
                                                    "https://cdn.lyfepay.io/js-sdk/v1/checkout-v1.0.75.min.js?v=9"
                                                </span>{ " " }
                                                <span className="text-[#67cdcc]">&gt;</span>
                                                <span className="text-[#67cdcc]">&lt;</span>
                                                <span className="text-[#67cdcc]">/</span>script
                                                <span className="text-[#67cdcc]">&gt;</span>
                                            </code>
                                        </pre>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <span className="my-3 inline-block font-normal">Create a placeholder element in your page where you want to mount the JS SDK UI:</span>
                                    <div className="bg-gray-800 p-4 rounded-lg">
                                        <pre className="language-js max-h-[200px] overflow-auto scrollbar scrollbar-w-[10px] scrollbar-h-[10px] dark:scrollbar-thumb-gray-600 scrollbar-thumb-gray-500 dark:scrollbar-track-gray-900 scrollbar-track-gray-800">
                                            <code>
                                                <span className="text-[#67cdcc]">&lt;</span>div id
                                                <span className="text-[#67cdcc]">=</span>
                                                <span className="text-[#7ec699]">"payments"</span>
                                                <span className="text-[#67cdcc]">&gt;</span>
                                                <span className="text-[#67cdcc]">&lt;</span>
                                                <span className="text-[#67cdcc]">/</span>div
                                                <span className="text-[#67cdcc]">&gt;</span>
                                            </code>
                                        </pre>

                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="my-3 inline-block max-w-4xl 2xl:max-w-5xl break-words w-full text-slate-300 prose prose-md leading-6">
                                        Include the following code to create an instance of JS SDK UI, replace the{ " " }
                                        <b>{ "{{client_token}}" }</b> placeholder with actual token generated from Step above.
                                    </p>
                                    <div className="bg-gray-800 p-4 rounded-lg">
                                        <pre className="language-js max-h-[350px] overflow-auto scrollbar scrollbar-w-[10px] scrollbar-h-[10px] dark:scrollbar-thumb-gray-600 scrollbar-thumb-gray-500 dark:scrollbar-track-gray-900 scrollbar-track-gray-800">
                                            <code className='relative'>
                                                <button
                                                    onClick={ copyToClipboard }
                                                    className="absolute top-6 right-6 px-4 py-2 bg-slate-400 text-white rounded-md focus:outline-none"
                                                >
                                                    <svg
                                                        className="w-6 h-6 text-gray-800 dark:text-white"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={ 24 }
                                                        height={ 24 }
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z"
                                                            clipRule="evenodd"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                                <span className={ `${copied ? "" : "hidden"}  absolute top-16 right-6 text-[#74fb31] text-lg font-medium` }>Copied!</span>
                                                <SyntaxHighlighter style={ atomOneDark } wrapLines={ true } language="javascript" >
                                                    { `<script type="text/javascript">
var elements = new lyfPayCheckout("{{client_token}}");
elements.create(${JSON.stringify(customizeOptions, null, 2)})
</script> `   }
                                                </SyntaxHighlighter>
                                            </code>
                                        </pre>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end gap-2'>
                        <button
                            type="button"
                            onClick={ () => setStep(1) }
                            className="relative inline-flex rounded-md items-center justify-start py-3 pl-10 pr-4 overflow-hidden font-semibold bg-indigo-500 text-white transition-all duration-150 ease-in-out hover:pr-10 hover:pl-6 hover:bg-indigo-700 group"
                        >
                            <span className="absolute right-0 pr-4 duration-200 ease-out translate-x-12 group-hover:translate-x-0">
                                <svg
                                    className="w-5 h-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={ 24 }
                                    height={ 24 }
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M9.06134 18.1227L3 12.0613M3 12.0613L9.06134 6M3 12.0613H20.9999"
                                        stroke="currentcolor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-0 group-hover:-translate-x-12 ease-out duration-200">
                                <svg
                                    className="w-5 h-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={ 24 }
                                    height={ 24 }
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M9.06134 18.1227L3 12.0613M3 12.0613L9.06134 6M3 12.0613H20.9999"
                                        stroke="currentcolor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                Back
                            </span>
                        </button>
                        <button
                            type="button"
                            onClick={ () => toggleShowObject() }
                            className="py-3 px-5 text-sm bg-indigo-500 text-white rounded-md cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 flex items-center hover:bg-indigo-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ): (
                <div>
                    <h4>Oops!</h4>
                    <p>Something went wrong.</p>
                    <button onClick={ () => setStep(1) }>Go to home</button>
                </div>
            ) }
        </div>
    );
};

export default CodeView;

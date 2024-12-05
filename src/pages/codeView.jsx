import React, { useState } from 'react';
import { useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeView = ({ customizeOptions }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const code = JSON.stringify(customizeOptions, null, 2);
        navigator.clipboard.writeText(code)
            .then(() => setCopied(true))
            .catch(() => setCopied(false));
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    useEffect(() => {
        return () => clearTimeout()
    }, [])

    return (
        <div className="w-full h-screen overflow-y-scroll absolute top-0 left-0 justify-center items-center bg-white">
            <div className="w-full relative p-4 border rounded-lg shadow-lg">
                <SyntaxHighlighter language="javascript" >
                    { JSON.stringify(customizeOptions, null, 2) }
                </SyntaxHighlighter>
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
                <span className={ `${copied ? "" : "hidden"}  absolute top-16 right-6 text-blue-800 text-lg font-medium` }>Copied!</span>
            </div>
        </div>
    );
};

export default CodeView;

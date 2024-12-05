import React, { useState } from 'react';

const CodeView = ({ customizeOptions }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const code = JSON.stringify(customizeOptions, null, 2);
        navigator.clipboard.writeText(code)
            .then(() => setCopied(true))
            .catch(() => setCopied(false));
    };

    // Helper function to render the object directly as it is
    const renderObject = (obj) => {
        return (
            <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 whitespace-pre-wrap">
                { JSON.stringify(obj, null, 2) }
            </pre>
        );
    };

    return (
        <div className="flex w-full h-screen absolute top-0 left-0 justify-center items-center bg-white">
            <div className="relative w-4/5 p-4 border rounded-lg shadow-lg">
                <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800">
                    { renderObject(customizeOptions) }
                </div>
                <button
                    onClick={ copyToClipboard }
                    className="absolute top-2 right-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                >
                    { copied ? 'Copied!' : 'Copy Code' }
                </button>
            </div>
        </div>
    );
};

export default CodeView;

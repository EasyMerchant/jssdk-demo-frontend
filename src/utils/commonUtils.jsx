import React, { useState } from "react";
  
export const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute right-0 bottom-full mb-2 w-max max-w-xs px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg z-50">
          {text}
        </div>
      )}
    </div>
  );
};


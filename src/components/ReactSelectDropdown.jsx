import React, { useState, useEffect, useRef } from "react";

const SelectWithPopover =  ({ options ,setCustomizeOptions, defaultValue})=> {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const popoverRef = useRef(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setHighlightedIndex(-1);
  }, [searchText, options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setPopoverOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (isPopoverOpen) {
      if (e.key === "ArrowDown") {
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        setCustomizeOptions((prevData) => ({
            ...prevData,
            currency: filteredOptions[highlightedIndex].value
        }))
        setPopoverOpen(false);
        setSearchText("");
      } else if (e.key === "Escape") {
        setPopoverOpen(false);
      }
    }
  };

  const handleSelect = (option) => {
    setCustomizeOptions((prevData) => ({
        ...prevData,
        currency:option.value
    }))
    setPopoverOpen(false);
    setSearchText("");
  };

  const getSelectedLabel = () => {
    const selected = options.find((option) => option.value === defaultValue);
    return selected ? selected.label : "Select option";
  };

  return (
    <div className="relative w-full h-full min-w-20 max-w-28" ref={popoverRef}>
      <button
        onClick={() => setPopoverOpen(!isPopoverOpen)}
        className="w-full h-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-left flex justify-between items-center shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      >
        <span className="text-gray-700">{getSelectedLabel()}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isPopoverOpen && (
        <div
          className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg"
          onKeyDown={handleKeyDown}
        >
          <div className="py-3 px-1">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>

          <ul className="max-h-60 overflow-auto no-scroll">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer ${
                    highlightedIndex === index
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-500 hover:text-white"
                  }`}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">Not found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectWithPopover;

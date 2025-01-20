import React, { useState } from 'react';

const Dropdown = ({ label, options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left lg:mb-0 mb-4">
      <button
        type="button"
        className="inline-flex justify-center w-[250px] rounded-md border border-gray-300 shadow-sm px-4 py-2 lg:ml-0 ml-8  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        onClick={handleToggle}
      >
        {label}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                className={`block px-4 py-2 text-sm w-full text-left ${selectedOptions.includes(option) ? 'bg-blue-100 text-blue-900' : 'text-gray-700'} hover:bg-blue-100`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

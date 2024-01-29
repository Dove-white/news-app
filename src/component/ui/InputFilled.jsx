import React from "react";

const InputFilled = ({label, type, id, placeholder}) => {
  return (
    <>
      <div>
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-black"
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

export default InputFilled;

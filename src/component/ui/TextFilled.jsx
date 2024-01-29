import React from "react";

const TextFilled = ({ label, id, placeholder }) => {
  return (
    <>
      <div>
        <label for={id} class="block mb-2 text-sm font-medium text-black">
          {label}
        </label>

        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          name={id}
          id={id}
          cols="30"
          rows="10"
          placeholder={placeholder}
          required
        ></textarea>
      </div>
    </>
  );
};

export default TextFilled;

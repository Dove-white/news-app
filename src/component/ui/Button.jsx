import React from "react";

const Button = ({
  name,
  className = "black",
  type,
  onClick = () => console.log("click"),
}) => {
  return (
    <button
      className={`focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${className}`}
      type={type}
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
};

export default Button;

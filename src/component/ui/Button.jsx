import React from "react";

const Button = ({ name, className, type }) => {
  return (
    <button className={className} type={type}>
      {name}
    </button>
  );
};

export default Button;

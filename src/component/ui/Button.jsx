import React from "react";

const Button = ({ name, className, type, onChange }) => {
  return (
    <button className={className} type={type} onChange={() => onChange()}>
      {name}
    </button>
  );
};

export default Button;

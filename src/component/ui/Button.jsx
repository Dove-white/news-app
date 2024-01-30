import React from "react";

const Button = ({ name, className, type, onChange, onClick }) => {
  return (
    <button className={className} type={type} onChange={() => onChange()} onClick={() => onClick()}>
      {name}
    </button>
  );
};

export default Button;

import React from "react";
import "./Input.module.scss";

// Define the Input component with its props
const Input: React.FC<InputProps> = ({
  name,
  value,
  placeholder = "",
  onChange,
  type = "text", // default to 'text' if no type is specified
  className,
  id,
  style,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      style={style}
    />
  );
};

export default Input;

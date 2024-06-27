import React from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import DynamicIcon from './Dynamic';
// import { IoPersonOutline } from "react-icons/io5";
// import '../Input/InputG1L2.css';
// import logo from "../assets/logo22.png"
const InputComponent = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  className,
  toggleVisibility,
  isPasswordVisible,
  iconName 
}) => {
  return (
    <div className="relative mt-1">
      <span className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none span_icon">
        
        </span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className={`border border-gray-300 p-2 rounded w-full pl-10 ${className}`}
        />
      </span>
      
      {toggleVisibility && (
        <span
          onClick={toggleVisibility}
          className="absolute cursor-pointer right-3 top-3">
          {isPasswordVisible ? <FaEyeSlash /> : <FaEyeSlash />}
        </span>
      )}
    </div>
  );
};

export default InputComponent;

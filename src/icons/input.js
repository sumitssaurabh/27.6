import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
// import { FaSearch } from "react-icons/fa";

import "../Input/InputG1L2.css";
// import { Input } from 'postcss';

const InputG1L2 = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  className,
  toggleVisibility,
  isPasswordVisible,
  icons,
}) => {
  return (
    <div className="relative mt-1">
      {/* <span className="relative"> */}
      {/* <span className="absolute inset-y-0 left-0 flex pl-3 pointer-events-none 0 tems-center span_icon"> */}
      {/* Replace IoPersonOutline with your icon component  */}
      {/* <IoPersonOutline className="text-gray-400 iconss" /> */}
      {/* </span>{" "} */}
      {/* </span> */}
      <div className="relative flex items-center w-full ">
        <IoPersonOutline className="absolute text-gray-500 left-3" />
        <input
          type=""
          placeholder=""
          className=""
         
        />
      </div>
      {/* <input
        icons={icons}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`Input_css border border-gray-300 p-2 rounded w-full `}
      /> */}

      {toggleVisibility && (
        <span
          onClick={toggleVisibility}
          className="absolute cursor-pointer right-3 top-3"
        >
          {isPasswordVisible ? <FaEyeSlash /> : <FaEyeSlash />}
        </span>
      )}
    </div>
  );
};

export default InputG1L2;

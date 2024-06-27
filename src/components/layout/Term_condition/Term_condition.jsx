import React from "react";
// import "./Term_condition.css";

const Term_condition = ({ onCheckboxChange }) => {
  const handleCheckboxChange = (e) => {
    onCheckboxChange(e.target.checked);
  };
  return (
    <div className="">
      <h6 className="font-light  i">
        <span>
          <input
            className= "mt-2 ml-1 text-white bg-black checkbox"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
        </span>{" "}
        i agreed to the{" "}
        <span className="text-blue-700">Terms & Conditions </span>
      </h6>
    </div>
  );
};

export default Term_condition;

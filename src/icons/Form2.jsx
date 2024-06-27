import React, { useState } from "react";
import InputG1l1 from "../../components/common/Input/InputG1L2";
import Login_link from "../../components/layout/Login_link/Login_link";
import Button from "react-bootstrap/Button";
import "./Form.css";
 import { GoPerson } from "react-icons/go";
 import { MdOutlineMail } from "react-icons/md";
 import { RiLockPasswordLine } from "react-icons/ri";

import Term_condition from "../../components/layout/Term_condition/Term_condition";
// import { IoPersonOutline } from "react-icons/io5";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
    if (checked) {
      setError("");
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validate = () => {
    let formErrors = {};

    // Validate name (exactly 2 words, max 45 characters)
    if (!formData.name) {
      formErrors.name = "Name is required";
    } else if (formData.name.trim().split(/\s+/).length !== 2) {
      formErrors.name = "Name must contain exactly 2 words";
    } else if (formData.name.length > 45) {
      formErrors.name = "Name must be less than 45 characters";
    }

    // Validate email (must contain '@')
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/@/.test(formData.email)) {
      formErrors.email = "Email must contain '@'";
    }

    // Validate password (at least 1 capital letter, 1 number , 1 special charactor)
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,18}$/.test(formData.password)
    ) {
      formErrors.password =
        "Password must be 6-18 characters, include 1 capital letter and 1 number";
    }

    // Validate confirm password (must match password)
    if (!formData.confirm_password) {
      formErrors.confirm_password = "Confirm password is required";
    } else if (formData.password !== formData.confirm_password) {
      formErrors.confirm_password = "Confirm password does not match password";
    }
    // else{
    //   formErrors.confirm_password = "password_match";
    // }

    return formErrors;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!isChecked) {
  //     setError("Please read and accept the terms and conditions.");
  //   } else {
  //     // Proceed with form submission
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setErrors("Please read and accept the terms and conditions.");
    } else {
      // Proceed with form submission
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <label
        htmlFor="name"
        className="block my-px text-sm text-gray-500 Name_css form-label"
      >
        Name
      </label>

      <div className="relative flex items-center w-full max-w-sm mx-auto">
        <GoPerson className="absolute text-gray-500 left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      

      {errors.name && <div className="red_error">{errors.name}</div>}

      <label
        htmlFor="email"
        className="block my-px text-sm text-gray-500 form-label"
      >
        Email
      </label>
      <div className="relative flex items-center w-full max-w-sm mx-auto">
        < MdOutlineMail className="absolute text-gray-500 left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>
{/* 
      <InputG1l1
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        name="email"
        className="w-full leading-tight text-gray-700 border rounded shadow appearance-none error_email input_css form-control focus:outline-none focus:shadow-outline focus:border-purple-500 hover:bg-purple-100"
      /> */}
      {/* {errors.email && <div className="error_email">{errors.email}</div>} */}
      {errors.email && <div className="red_error">{errors.email}</div>}

      <label
        htmlFor="password"
        className="block my-px text-sm text-gray-500 form-label"
      >
        Password
      </label>
      <div className="relative flex items-center w-full max-w-sm mx-auto">
        <
        RiLockPasswordLine className="absolute text-gray-500 left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* <InputG1l1
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        className="w-full leading-tight text-gray-700 border rounded shadow appearance-none input_css form-control focus:outline-none focus:shadow-outline focus:border-purple-500 hover:bg-purple-100"
        // toggleVisibility={togglePasswordVisibility}
        isPasswordVisible={passwordVisible}
      /> */}
      {errors.password && (
        <div className="password_error">{errors.password}</div>
      )}

      <label
        htmlFor="confirm_password"
        className="block my-px text-sm text-gray-500 form-label"
      >
        Confirm password
      </label>
      <div className="relative flex items-center w-full max-w-sm mx-auto">
        <
        RiLockPasswordLine className="absolute text-gray-500 left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

{/* 
      <InputG1l1
        type="password"
        placeholder="Confirm password"
        value={formData.confirm_password}
        onChange={handleChange}
        name="confirm_password"
        className="w-full leading-tight text-gray-700 border rounded shadow appearance-none input_css form-control focus:outline-none focus:shadow-outline focus:border-purple-500 hover:bg-purple-100"
      /> */}
      {errors.confirm_password && (
        <div className="error_cpassword">{errors.confirm_password}</div>
      )}
      <Term_condition
        isChecked={isChecked}
        onCheckboxChange={handleCheckboxChange}
      />

      {/* {error && <p className="text-red-500">{error}</p>} */}

      <Button
        type="submit"
        variant="primary"
        disabled={!isChecked}
        className="w-full button_signup"
      >
        Sign Up
      </Button>
      {setErrors && <div className="error_cpassword">{setErrors}</div>}
      <Login_link />
    </form>
  );
};

export default Forms;

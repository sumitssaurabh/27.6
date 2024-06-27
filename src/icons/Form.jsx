import React, { useState } from 'react';
import InputComponent  from "./InputComponent";
   {/* <DynamicIcon iconName="FaSearch" className="text-blue-500 size-6 "/> */}

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      isPasswordVisible: !formData.isPasswordVisible
    });
  };

  return (
    <form>
      <label
        htmlFor="name"
        className="block my-px text-sm font-bold text-gray-500 form-label"
      >
        Name:
      </label>
      <InputComponent 
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        name="name"
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none form-control focus:outline-none focus:shadow-outline focus:border-purple-500 hover:bg-purple-100"
      />
      <label
        htmlFor="email"
        className="block my-px text-sm font-bold text-gray-500 form-label"
      >
        Email address:
      </label>
      <InputComponent 
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        name="email"
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none form-control focus:outline-none focus:shadow-outline focus:border-purple-500 hover:bg-purple-100"
      />
      <label
        htmlFor="password"
        className="block my-px text-sm font-bold text-gray-500 form-label"
      >
        Password:
      </label>
      <InputComponent 
        type={formData.isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none form-control focus:outline-none focus:shadow-outline focus:border-purple-500 hover:bg-purple-100"
        toggleVisibility={togglePasswordVisibility}
        isPasswordVisible={formData.isPasswordVisible}
      />
    </form>
  );
};

export default Form;

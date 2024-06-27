import { useState } from "react";
import "./App.css";
// import Home from "./Pages/Home/Home"
import SignupG2L1 from "./Pages/Signup/SignupG2L1";
// import DynamicIcon from "./components/common/Input/Dynamic_icons";
// import Forms from './Pages/Form/Forms'
// import { FaSearch } from "react-icons/fa";

function App() {
  // const testing = false;

  // if (testing) {
  //   return (
  //     <div className="relative flex items-center w-full max-w-sm mx-auto">
  //       <FaSearch className="absolute text-gray-500 left-3" />
  //       <input
  //         type="text"
  //         placeholder="Search..."
  //         className="w-full py-2 pl-10 pr-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
  //       />
  //     </div>
    // );
  // }

  return (
    <div className="container_app">
      <SignupG2L1 /> </div>
   
  );
}

export default App;

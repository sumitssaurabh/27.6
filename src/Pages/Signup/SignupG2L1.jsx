import React, { useState } from "react";
import LanguageSelectorG1l4 from "../../components/common/Language/LanguageSelectorG1l4";
import LogoHeader from "../../components/common/Logo/LogoHeaderG1";
import WelcomeMessageG1L3 from "../../components/common/Logo/WelcomeMessageG1L3";
import ButtonG1L2 from "../../components/common/Button/ButtonG1L2";
import googleLogo from "../../assets/photo/google_img.png";
import Email_Signup from "../../components/layout/Email_Signup/Email_Signup";
import Forms from "../Form/Forms";
import Right_img from "../../components/layout/Rightside/Right_side";
// import "./SignupG2L1.css";


const SignupG2L1 = () => {
  const [showGoogleSignup, setShowGoogleSignup] = useState(true);
  
  return (
    <div className="flex flex-col w-full h-screen lg:flex-row ">
      <div className="w-full h-full p-8 bg-gray-100 lg:w-1/2">
        <LanguageSelectorG1l4 />
        <LogoHeader />
        <WelcomeMessageG1L3 />
        {showGoogleSignup && (
          <ButtonG1L2
            className="button_google text-decoration-none mar"
            logo={googleLogo}
            backgroundColor="white"
            textColor="black"
            border="1px solid black"
            disabled
            cursor="pointer"
            text="Sigup with google"
          ></ButtonG1L2>
        )}

        <Email_Signup />
        <Forms />
      </div>
      <div className="flex items-center justify-center w-full h-full lg:w-1/2">
        {" "}
        <Right_img />
      </div>
    </div>
  );
};

export default SignupG2L1;

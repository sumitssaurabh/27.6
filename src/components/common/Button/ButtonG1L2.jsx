import React from "react";
import { Button } from "react-bootstrap";
import "../Button/buttonG1L2.css";
import google_img from "../../../assets/photo/google_img.png";
const ButtonG1L2 = ({
  text,
  backgroundColor,
  textColor,
  border,
  cursor,
  logo,
  label,
}) => {
  return (
    <>
      <Button
        variant="light"
        className="flex items-center justify-center w-full py-2 d-flex button_google"
      >
        <img src={google_img} alt="" className="h-4 google_signup" /> Sign up
        with Google
      </Button>
    </>
  );
};
const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#4285F4",
    color: "white",
    borderRadius: "5px",
    outline: "none",
  },
  logo: {
    marginRight: "10px",
    width: "20px",
    height: "20px",
  },
};
export default ButtonG1L2;

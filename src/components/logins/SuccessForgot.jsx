import React, { useEffect } from "react";
// import kinAppLogo from "../../assets/kinapp_logo.svg";
import "./Styles.css";

const SuccessForgot = ({ text }) => {
  return (
    <div className="message-container">
      <h1 className="success-text">{text}</h1>
    </div>
  );
};

export default SuccessForgot;

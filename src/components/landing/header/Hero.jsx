import React from "react";
import "./Hero.css";
import kinAppLogo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="logo-container">
        <img className="hero-image" src={kinAppLogo} />
      </div>
      <h1 className="saira">kinApp</h1>
      <p className="hero-p">
        Creamos herramientas sencillas para el análisis biomecánico
      </p>
      <form className="hero-form">
        <button className="hero-button" onClick={() => navigate("/about")}>
          ver mas ...
        </button>
      </form>
    </div>
  );
};

export default Hero;

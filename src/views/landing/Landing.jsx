import React, { useState, useEffect } from "react";
import {
  FaSignInAlt,
  FaUserShield,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import { GiSpinningBlades } from "react-icons/gi";
import LoginForm from "../forms/LoginForm";
import "./Landing.css";

const Landing = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      icon: <FaUserShield className="lp-feature-icon" />,
      title: "Acceso Seguro",
      description: "Encriptación de última generación",
    },
    {
      icon: <FaRocket className="lp-feature-icon" />,
      title: "Rendimiento",
      description: "Tecnología optimizada",
    },
    {
      icon: <FaShieldAlt className="lp-feature-icon" />,
      title: "Privacidad",
      description: "Datos protegidos",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="lp-container">
      <div className="lp-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="lp-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="lp-content">
        <div className="lp-hero">
          <h1 className="lp-title">
            Bienvenido a <span className="lp-highlight">Plataforma</span>
          </h1>
          <p className="lp-subtitle">Soluciones digitales innovadoras</p>

          <div className="lp-features">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`lp-feature-card ${
                  index === activeFeature ? "lp-active" : ""
                }`}
              >
                {feature.icon}
                <h3 className="lp-feature-title">{feature.title}</h3>
                <p className="lp-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lp-login-container">
          <div className="lp-login-card">
            <div className="lp-card-header">
              <FaSignInAlt className="lp-login-icon" />
              <h2 className="lp-card-title">Iniciar Sesión</h2>
            </div>
            <div className="lp-card-body">
              <LoginForm />
            </div>
            <div className="lp-card-footer">
              <GiSpinningBlades className="lp-spinner-icon" />
              <p className="lp-footer-text">Acceso seguro encriptado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

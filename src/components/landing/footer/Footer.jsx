// ParagraphComponent.js
import React from "react";
import "./Footer.css"; // Import your component-specific CSS file
import { NavLink } from "react-router-dom";

const ParagraphComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-paragraph">
        <h3 className="footer-title">CONÓCENOS</h3>
        <NavLink to="/about" className="footer-description">
          Acerca de kinApp
        </NavLink>
        <NavLink to="/about_us" className="footer-description">
          Quienes somos
        </NavLink>
      </div>
      <div className="footer-paragraph">
        <h3 className="footer-title">RECURSOS KINAPP</h3>
        <NavLink to="/web_application" className="footer-description">
          Aplicación web
        </NavLink>
      </div>
      <div className="footer-paragraph">
        <h3 className="footer-title">CAPACITATE CON NOSOTROS</h3>
        <NavLink to="/courses" className="footer-description">
          Capacitaciones
        </NavLink>
      </div>
      <div className="footer-paragraph">
        <h3 className="footer-title">MÁS</h3>
        <NavLink to="/aviso_legal" className="footer-description">
          Términos y condiciones
        </NavLink>
      </div>
    </div>
  );
};

export default ParagraphComponent;

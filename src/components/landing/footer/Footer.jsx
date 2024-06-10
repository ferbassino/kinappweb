// ParagraphComponent.js
import React from "react";
import "./Footer.css"; // Import your component-specific CSS file
import { NavLink } from "react-router-dom";

const ParagraphComponent = () => {
  return (
    <>
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
          <h3 className="footer-title">Mas</h3>
          <NavLink to="/aviso_legal" className="footer-description">
            Aviso legal
          </NavLink>
          <NavLink to="/baja" className="footer-description">
            Darse de baja
          </NavLink>
        </div>
      </div>

      <div className="footer-footer-container">
        <div className="footer-footer">
          <p className="footer-title">kinappbiomechanics@gmail.com</p>
        </div>
        <div className="footer-footer">
          <div className="footer-title">
            <a
              href="https://www.instagram.com/kinapp.dev?igsh=d21nYnhtaTJpdDJ0"
              className="footer-title"
              target="blanc"
              rel="noopener"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-footer">
          <div className="footer-title">
            <a
              href="https://www.facebook.com/share/2TLpi5BRKV5FhS7n/?mibextid=qi2Omg"
              className="footer-title"
              target="blanc"
              rel="noopener"
            >
              facebook
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParagraphComponent;

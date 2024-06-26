import React from "react";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import "./QuienesSomos.css";
const QuienesSomos = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="us-container">
        <header className="us-header-container">
          <h1 className="us-header-title">El equipo</h1>
          <p className="us-header-subtitle">
            Nos apasiona la biomecánica, estudiar su complejidad y crear
            herramientas sencillas para analizarla.
          </p>
        </header>
        <div className="us-body-container">
          <div className="individual-container">
            <img alt="team" className="us-image1" src="fer.jpeg" />
            <div className="us-desc-container">
              <h2 className="individual-title">Fernando Bassino</h2>
              <h3 className="individual-subtitle">
                Lic. Kinesiólogo fisiatra (UBA)
              </h3>
              <h3 className="individual-subtitle">
                Desarrollador web full stack (UTN)
              </h3>
              <p className="individual-description">
                Desde el año 2015 trabajando en el desarrollo de dispositivos
                inerciales (UMICO), desarrollo de aplicaciones móviles de
                captura de movimiento, y desarrollo de aplicaciones web
                dinámicas de análisis biomecánico.
              </p>
            </div>
          </div>
          <div className="individual-container">
            <img alt="team" className="us-image1" src="juan.jpeg" />
            <div className="us-desc-container">
              <h2 className="individual-title">Juan Cruz Vega Pose</h2>
              <h3 className="individual-subtitle">
                Lic. Kinesiólogo fisiatra (UBA)
              </h3>
              <h3 className="individual-subtitle">
                Residente del Hospital Pirovano, CABA, Argentina
              </h3>
              <p className="individual-description">
                Con experiencia en análisis biomecánico participando en equipos
                de trabajo a nivel nacional e internacional (Volare Sport, camp
                Iten, Kenia)
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default QuienesSomos;

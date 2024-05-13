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
      <section className="us-container">
        <div className="us-header-container">
          <h1 className="us-header-title">El equipo</h1>
          <p className="us-header-subtitle">
            Nos apasiona la biomecánica, estudiar su complejidad y crear
            herramientas sencillas para analizarla.
          </p>
        </div>
        <div className="us-body-container">
          <div className="individual-container">
            <img
              alt="team"
              className="us-image"
              src="https://storage.googleapis.com/kinapp-web/kinapp-web/quienes-somos/fer.jpeg"
            />
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
              {/* <span className="inline-flex">
                  <a className="">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span> */}
            </div>
          </div>
          <div className="individual-container">
            <img
              alt="team"
              className="us-image"
              src="https://storage.googleapis.com/kinapp-web/kinapp-web/quienes-somos/juan.jpeg"
            />
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
              {/* <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span> */}
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default QuienesSomos;

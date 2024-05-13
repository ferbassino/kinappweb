import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineMemory } from "react-icons/md";
import { FaDatabase, FaChalkboardTeacher } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import "./About.css";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();
  const items = [
    "Aplicación web",
    "Aplicaciones móviles",
    "Dispositivos inerciales",
    "Almacenamiento en la nube",
    "Documentación",
    "Capacitación",
  ];

  return (
    <div id="kinapp">
      <header>
        <Navbar />
      </header>

      <section className="about-container">
        <div className="about-header-container">
          <div className="about-title-container">
            <h1 className="about-title">Acerca de kinApp</h1>
            <p className="about-subtitle">
              kinApp es un ecosistema tecnológico que incluye recursos para el
              registro, análisis y almacenamiento de datos de evaluaciones
              biomecánicas.
            </p>
            <p className="about-ecosistema">El Ecosistema:</p>
          </div>

          <div className="about-items">
            {items.map((item, index) => (
              <a key={index} href="#web-application" className="">
                <div className="about-item-e-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="check"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <p className="about-item">{item}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ---------------------------web----------------------------- */}
      <section className="about-description-container">
        <div className="about-desc-container">
          <div className="about-icon-container">
            <CgWebsite className="check" />
          </div>
          <div className="about-text-container">
            <h2 id="web-application" className="about-item-des">
              Aplicación web
            </h2>
            <p className="about-desc">
              La aplicación web permite ver los datos registrados por los
              dispositivos del ecosistema kinApp, cargar datos de otros
              dispositivos, interactuar de manera dinámica para el análisis y
              gestionar el perfil del evaluador.
            </p>
          </div>
        </div>
        {/* ----------------------mobile--------------------------- */}
        <div className="about-desc-container">
          <div className="about-icon-container">
            <FaMobileScreen className="check" />
          </div>
          <div className="about-text-container">
            <h2 id="mobile" className="about-item-des">
              Aplicaciones móviles
            </h2>
            <p className="about-desc">
              Las aplicaciones móviles registran el movimiento corporal (saltos,
              movimientos de rotación o traslación) a través de los sensores de
              los dispositivos. Al guardar los datos estos se almacenan en una
              base de datos y pueden ser consultados en cualquier momento.
            </p>
          </div>
        </div>
        {/* -----------------------inerciales----------------------------- */}

        <div className="about-desc-container">
          <div className="about-icon-container">
            <MdOutlineMemory className="check" />
          </div>
          <div className="about-text-container">
            <h2 id="inerciales" className="about-item-des">
              Dispositivos inerciales
            </h2>
            <p className="about-desc">
              Uno de los recursos del ecosistema kinApp es la unidad inercial
              UMICO. Este dispositivo es un sensor independiente que se coloca
              en cualquier segmento corporal y con conexión bluetooth a la pc
              para la visualización del registro en una interfaz propia.
            </p>
          </div>
        </div>
        {/* ------------------------almacenamiento------------------- */}
        <div className="about-desc-container">
          <div className="about-icon-container">
            <FaDatabase className="check" />
          </div>
          <div className="about-text-container">
            <h2 id="nube" className="about-item-des">
              Almacenamiento en la nube
            </h2>
            <p className="about-desc">
              Los datos registrados en las evaluaciones se pueden guardar
              creando un perfil del usuario para poder consultarlos, editarlos y
              eliminarlos en cualquier momento y desde cualquier dispositivo.
            </p>
          </div>
        </div>
        {/* -----------------------documentación----------------------------- */}

        <div className="about-desc-container">
          <div className="about-icon-container">
            <SiBookstack className="check" />
          </div>
          <div className="about-text-container">
            <h2 id="docs" className="about-item-des">
              Documentación
            </h2>
            <p className="about-desc">
              Documentación disponible con bibliografía, artículos, uso del
              ecosistema y navegación en la aplicacion web.
            </p>
          </div>
        </div>
        {/* ------------------------capacitacion------------------- */}
        <div className="about-desc-container">
          <div className="about-icon-container">
            <FaChalkboardTeacher className="check" />
          </div>
          <div className="about-text-container">
            <h2 id="capacitacion" className="about-item-des">
              Capacitación
            </h2>
            <p className="about-desc">
              kinApp ofrece capacitación en biomecánica y en la utilización de
              tecnologia accesible para el registro de las variables generadas a
              partir del movimiento corporal.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;

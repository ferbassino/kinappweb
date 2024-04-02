import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineMemory } from "react-icons/md";
import { FaDatabase, FaChalkboardTeacher } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 60, left: 0, behavior: "smooth" });
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-5xl text-2xl font-medium text-center title-font text-blue-950 mb-4">
              Acerca de kinApp
            </h1>
            <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-blue-950 mb-10">
              kinApp es un ecosistema tecnológico que incluye recursos para el
              registro, análisis y almacenamiento de datos de evaluaciones
              biomecánicas.
            </p>
            <div className="w-4/5 sm:w-1/3 mx-auto sm:mb-2  mb-2 text-center">
              {/* <div className="p-2 sm:w-1/2 w-full"> */}
              <div className="bg-blue-950 rounded flex p-4 h-full ">
                <span className="title-font font-medium text-slate-50">
                  El Ecosistema:
                </span>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {items.map((item, index) => (
              <a
                key={index}
                href="#web-application"
                className="p-2 sm:w-1/2 w-full"
              >
                <div className="bg-blue-950 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-slate-50 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-slate-50">
                    {item}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ---------------------------web----------------------------- */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-950 flex-shrink-0">
              <CgWebsite className="sm:w-20 sm:h-20 h-10 w-10" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2
                id="web-application"
                className="text-gray-900 text-lg title-font font-medium mb-2"
              >
                Aplicación web
              </h2>
              <p className="leading-relaxed text-base">
                La aplicación web permite ver los datos registrados por los
                dispositivos del ecosistema kinApp, cargar datos de otros
                dispositivos, interactuar de manera dinámica para el análisis y
                gestionar el perfil del evaluador.
              </p>
            </div>
          </div>
          {/* ----------------------mobile--------------------------- */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2
                id="mobile"
                className="text-gray-900 text-lg title-font font-medium mb-2"
              >
                Aplicaciones móviles
              </h2>
              <p className="leading-relaxed text-base">
                Las aplicaciones móviles registran el movimiento corporal
                (saltos, movimientos de rotación o traslación) a través de los
                sensores de los dispositivos. Al guardar los datos estos se
                almacenan en una base de datos y pueden ser consultados en
                cualquier momento.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-950 flex-shrink-0">
              <FaMobileScreen className="sm:w-20 sm:h-20 h-10 w-10" />
            </div>
          </div>
          {/* -----------------------inerciales----------------------------- */}

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-950 flex-shrink-0">
              <MdOutlineMemory className="sm:w-20 sm:h-20 h-10 w-10" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2
                id="inerciales"
                className="text-gray-900 text-lg title-font font-medium mb-2"
              >
                Dispositivos inerciales
              </h2>
              <p className="leading-relaxed text-base">
                Uno de los recursos del ecosistema kinApp es la unidad inercial
                UMICO. Este dispositivo es un sensor independiente que se coloca
                en cualquier segmento corporal y con conexión bluetooth a la pc
                para la visualización del registro en una interfaz propia.
              </p>
            </div>
          </div>
          {/* ------------------------almacenamiento------------------- */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2
                id="nube"
                className="text-gray-900 text-lg title-font font-medium mb-2"
              >
                Almacenamiento en la nube
              </h2>
              <p className="leading-relaxed text-base">
                Los datos registrados en las evaluaciones se pueden guardar
                creando un perfil del usuario para poder consultarlos, editarlos
                y eliminarlos en cualquier momento y desde cualquier
                dispositivo.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-950 flex-shrink-0">
              <FaDatabase className="sm:w-20 sm:h-20 h-10 w-10" />
            </div>
          </div>
          {/* -----------------------documentación----------------------------- */}

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-950 flex-shrink-0">
              <SiBookstack className="sm:w-20 sm:h-20 h-10 w-10" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2
                id="docs"
                className="text-gray-900 text-lg title-font font-medium mb-2"
              >
                Documentación
              </h2>
              <p className="leading-relaxed text-base">
                Documentación disponible con bibliografía, artículos, uso del
                ecosistema y navegación en la aplicacion web.
              </p>
            </div>
          </div>
          {/* ------------------------capacitacion------------------- */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2
                id="capacitacion"
                className="text-gray-900 text-lg title-font font-medium mb-2"
              >
                Capacitación
              </h2>
              <p className="leading-relaxed text-base">
                kinApp ofrece capacitación en biomecánica y en la utilización de
                tecnologia accesible para el registro de las variables generadas
                a partir del movimiento corporal.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-950 flex-shrink-0">
              <FaChalkboardTeacher className="sm:w-20 sm:h-20 h-10 w-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

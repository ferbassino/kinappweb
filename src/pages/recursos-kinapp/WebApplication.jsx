import React from "react";
import { CgWebsite } from "react-icons/cg";
const WebApplication = () => {
  return (
    <>
      <section className="container px-5 pt-10 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto  sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-950 flex-shrink-0">
            <CgWebsite className="sm:w-20 sm:h-20 h-10 w-10" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-xl text-blue-900 text- md:text-4xl title-font font-medium mb-2">
              Aplicación web
            </h2>
            <p className="leading-relaxed text-base">
              La aplicación web permite ver los datos registrados por los
              dispositivos del ecosistema kinApp, cargar datos de otros
              dispositivos, interactuar de manera dinámica para el análisis y
              gestionar el perfil del evaluador. En esta aplicación vas a
              encontrar:
            </p>
            <p className="leading-relaxed text-base">
              En esta aplicación vas a encontrar:
            </p>
          </div>
        </div>
      </section>
      <section className="text-blue-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {/* ----------------------------------------- */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0">
                <p className="text-2xl font-semibold title-font text-blue-700">
                  Análisis
                </p>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-justify text-sm md:text-2xl font-medium text-blue-900 title-font mb-2">
                  Aplicación de análisis biomecánico
                </h2>
                <p className="text-sm text-justify leading-relaxed">
                  En la aplicación web vas a poder realizar análisis biomecánico
                  registrando las evaluaciones con los dispositivos que ofrece
                  kinApp y de algunos otros dispositivos fuera de nuestro
                  entorno, como por ejemplo el registro por video, archivos
                  generados por unidades inerciales genéricas como las que se
                  encuentran en algunas aplicaciones móviles o en otros métodos
                  de análisis. Para poder utilizar esta herramienta debés estar
                  suscripto al sitio.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* -------------------------------------- */}
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-blue-700">
                  CATEGORY
                </span>
                <span className="mt-1 text-blue-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-blue-900 title-font mb-2">
                  Meditation bushwick direct trade taxidermy shaman
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-blue-700">
                  CATEGORY
                </span>
                <span className="text-sm text-blue-500">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-blue-900 title-font mb-2">
                  Woke master cleanse drinking vinegar salvia
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebApplication;

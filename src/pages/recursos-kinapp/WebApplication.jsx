import React from "react";
import { CgWebsite } from "react-icons/cg";
import Parrafo from "../../components/otros/Parrafo";
const WebApplication = () => {
  //   Análisis

  // Aplicación de análisis biomecánico
  // En la aplicación web vas a poder realizar análisis biomecánico registrando las evaluaciones con los dispositivos que ofrece kinApp y de algunos otros dispositivos fuera de nuestro entorno, como por ejemplo el registro por video, archivos generados por unidades inerciales genéricas como las que se encuentran en algunas aplicaciones móviles o en otros métodos de análisis. Para poder utilizar esta herramienta debés estar suscripto al sitio.
  return (
    <>
      <section className="container px-5 pt-10 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto  sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-950 flex-shrink-0">
            <CgWebsite className="sm:w-20 sm:h-20 h-10 w-10" />
          </div>
          <div className="flex-grow sm:text-left  mt-6 sm:mt-0">
            <h2 className="text-xl text-center text-blue-900 text- md:text-4xl title-font font-medium mb-2">
              Aplicación web
            </h2>
            <p className="leading-relaxed text-base text-justify">
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
        <div className="container px-1 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {/* ----------------------------------------- */}
            <Parrafo
              title="Análisis"
              subtitle="Aplicación de análisis biomecánico"
              text="En la aplicación web vas a poder realizar análisis biomecánico registrando las evaluaciones con los dispositivos que ofrece kinApp y de algunos otros dispositivos fuera de nuestro entorno, como por ejemplo el registro por video, archivos generados por unidades inerciales genéricas como las que se encuentran en algunas aplicaciones móviles o en otros métodos de análisis. Para poder utilizar esta herramienta debés estar suscripto al sitio."
            />
            {/* -------------------------------------- */}
            <Parrafo
              title="Documentación"
              subtitle="Contenido específico en biomecánica"
              text="En la documntación se explica paso a paso el funcionamiento de la aplicación,la utilización de las aplicaciones móviles y todo el contenido relacionado con en análisis biomecánico. "
            />
            {/* -------------------------------------- */}
            <Parrafo
              title="Aplicaciones móviles"
              subtitle="Captura de movimiento"
              text="El ecosistema kinApp incluye aplicaciones móviles que registran distintas variables cinemáticas cuando el dispositivo se coloca en los segmentos corporales o en algún otro elemento desplazado por este. Las aplicaciones capturan los movimientos de traslación y estos se pueden visualizar en la interfaz del dispositovo. Se pueden registrar rotaciones de los segmentos para evaluar la movilidad articular o los movimientos de traslación de los segmentos para evaluar la aceleración, la velocidad y la distancia"
            />
            {/* -------------------------------------- */}
            <Parrafo
              title="Consulta de evaluaciones"
              subtitle="Persistencia de los datos"
              text="Todos los movimientos registrados se pueden guardar para consultarlos en cualquier momento. Las evaluaciones se asocian a un usuario al cual se le genera un perfil con los datos de la evaluacion para poder obtener estadísticas y generar un informe. "
            />
            {/* -------------------------------------- */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WebApplication;

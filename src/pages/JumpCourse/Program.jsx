import React from "react";
import ProgramBlocks from "./ProgramBlocks";

const Program = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();

  const videoArray1 = [
    " Quienes somos y qué es KinApp",
    "Qué herramientas y aplicaciones se utilizarán en este curso",
    "Objetivos del curso",
    "Plataforma del curso",
  ];
  const sincronicoArray1 = [
    "Jueves 16/05/2024 19hs",
    "Presentación y demostración del entorno kinApp",
  ];

  const videoArray2 = [
    "Tipos de Salto y baterías de evaluación",
    "El salto en el deporte y el rendimiento",
    "Métodos de evaluación ",
    "IMU (unidad de movimiento inercial)",
  ];
  const sincronicoArray2 = [
    "Jueves 23/05/2024 19hs",
    "Demostración del App Jump",
    "Carga de datos a la pagina y visualización de información",
  ];

  const videoArray3 = [
    "SJ:",
    "- Aplicación del sistema de referencia",
    "- Leyes dinámicas",
    "- Análisis cinemático segmentario y puntual del SJ",
    "CMJ:",
    "- Leyes dinámicas",
    "- Análisis cinemático segmentario y puntual en CMJ",
    "Variables de interés y aplicación de herramientas de evaluación (IMU y video)",
  ];
  const sincronicoArray3 = [
    "Jueves 30/05/2024 19hs",
    "Análisis en conjunto de un caso",
    "Integración de datos por video y acelerometría y discusión del caso",
  ];

  const videoArray4 = [
    "Aterrizaje, impulso y cantidad de movimiento",
    "Dinámica del aterrizaje",
    "Energía potencial elástica y Stiffness",
    "Variables de interés y aplicación de herramientas de evaluación",
  ];
  const sincronicoArray4 = [
    "Jueves 06/06/2024 19hs",
    "Integración de datos por video y acelerometría",
    "Comportamiento del resorte y discusión del caso",
  ];

  const videoArray5 = [
    "Resumen del curso y herramientas a disposición",
    "Encuesta final del curso",
  ];
  const sincronicoArray5 = [
    "Jueves 13/06/2024 19hs",
    "Demostración del App Jump",
    "Carga de datos a la pagina y visualización de información",
    "Despejar dudas IMU",
  ];

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="sm:text-3xl text-xl text-blue-900 tracking-widest font-medium title-font mb-1">
              “BIOMECANICA DEL SALTO Y HERRAMIENTAS PARA SU EVALUACION”
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue-900">
              Programa
            </h1>
          </div>
          <div className="-my-8 divide-y-2 divide-gray-100">
            <ProgramBlocks
              semana="SEMANA 1"
              fechaSemana="13/05/2024"
              title="MODULO DE INTRODUCCION AL ENTORNO KINAPP Y PRESENTACION DELCURSO"
              videoArray={videoArray1}
              sincronicoArray={sincronicoArray1}
            />
            <ProgramBlocks
              semana="SEMANA 2"
              fechaSemana="20/05/2024"
              title="MODULO DE INTRODUCCIÓN AL SALTO"
              videoArray={videoArray2}
              sincronicoArray={sincronicoArray2}
            />
            <ProgramBlocks
              semana="SEMANA 3"
              fechaSemana="27/05/2024"
              title="BIOMECANICA Y EVALUACION DEL SJ Y CMJ"
              videoArray={videoArray3}
              sincronicoArray={sincronicoArray3}
            />
            <ProgramBlocks
              semana="SEMANA 4"
              fechaSemana="03/06/2024"
              title="BIOMECANICA Y EVALUACION DEL DROP JUMP Y STIFFNESS”"
              videoArray={videoArray4}
              sincronicoArray={sincronicoArray4}
            />
            <ProgramBlocks
              semana="SEMANA 5"
              fechaSemana="10/06/2024"
              title="BIOMECANICA Y EVALUACION DEL SJ Y CMJ"
              videoArray={videoArray5}
              sincronicoArray={sincronicoArray5}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;

import React from "react";
import ProgramBlocks from "./ProgramBlocks";

const Program = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();

  const videoArray1 = [
    "Presentación de equipo y del entorno kinApp",
    "Presentación del programa, plataforma y objetivos del curso",
  ];
  const sincronicoArray1 = [
    "Jueves 16/05/2024 19hs",
    "Demostración de la carga de datos para analisis a kinApp y visualización de la información",
  ];

  const videoArray2 = [
    "Tipos de salto y baterías de evaluación",
    "Relación del salto en el deporte y el rendimiento",
    "Métodos de evaluación (plataforma de fuerza, alfombra de contacto, IMU)",
    "Sistema de referencia e introducción a la Dinámica",
  ];
  const sincronicoArray2 = [
    "Jueves 23/05/2024 19hs",
    "Análisis del salto por Aplicación móvil y por video",
  ];

  const videoArray3 = [
    "SJ:",
    "- Análisis cinemático segmentario y puntual (CM) del SJ",
    "- Análisis dinámico",
    "- Variables de interés biomecánico",
    "CMJ:",
    "- Análisis cinemático segmentario y puntual (CM) del SJ",
    "- Análisis dinámico",
    "- Variables de interés biomecánico",
    "Traslación al análisis con video y con IMU ",
  ];
  const sincronicoArray3 = [
    "Jueves 30/05/2024 19hs",
    "Análisis en conjunto de un caso mediante la integración de datos por video y acelerometría",
  ];

  const videoArray4 = [
    "Física de la colisión",
    "Dinámica y análisis del aterrizaje",
    "Energía potencial elástica y Stiffness",
    "Análisis cinemático y dinámico mediante video y aplicación móvil para el Drop Jump y el Stiffness",
  ];
  const sincronicoArray4 = [
    "Jueves 06/06/2024 19hs",
    "Integración de datos por video y acelerometría con caso ",
    "Introducción a la carrera",
  ];

  const videoArray5 = [
    "Resumen del curso y herramientas a disposición",
    "Encuesta final del curso",
  ];
  const sincronicoArray5 = ["Jueves 13/06/2024 19hs"];

  return (
    <div>
      <section
        id="titulo-programa"
        className="text-gray-600 body-font overflow-hidden"
      >
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
              title="MODULO DE INTRODUCCION AL ENTORNO KINAPP Y PRESENTACION DEL CURSO"
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

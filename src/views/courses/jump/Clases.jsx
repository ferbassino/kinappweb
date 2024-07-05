import React from "react";
// import ReactPlayer from "react-player";
import ClasesBlocks from "../../../components/courses/ClasesBlocks";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";
import "./Clases.css";
const url =
  "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4";

const JumpClases = () => {
  const navigate = useNavigate();

  const blocks = [
    {
      date: "13/05/2024",
      title: "Introducción",
      subtitle: "Entorno kinapp y presentación del curso",
      description:
        "En este clase nos presentaremos, hablaremos de kinApp, describiremos la aplicación web y cuales son los objetivos del curso",
      videoUrl:
        "https://drive.google.com/file/d/1Ez0spfwKXA2PPU2Sv5rNGxQSOivsKjA6/preview",
    },
    {
      date: "20/05/2024",
      title: "El salto",
      subtitle: "Introducción al salto vertical",
      description:
        "En esta clase hablaremos sobre los tipos de salto y su importancia en el deporte y en el rendimiento y de los diferentes métodos de evalauación y entre ellos de las unidades inreciales de movimiento disponibles.",
      videoUrl:
        "https://drive.google.com/file/d/17JzufphelvFKDhYEw8aSW_XqZVwwWNbR/preview",
    },
    {
      date: "27/05/2024",
      title: "biomecánica",
      subtitle: "biomecánica y evaluación del sj y el cmj",
      description:
        "En esta clase abordaremos las bases biomecánicas de la evaluación de los saltos con y sin contramovimiento, las variables de interes y los datos obtenidos a través de las unidades inerciales y a través de video.",
      videoUrl:
        "https://drive.google.com/file/d/1Qd43GTYeFDCa2cmamH-LQtcEqVhpwG6Z/preview",
    },
    {
      date: "03/06/2024",
      title: "stiffness",
      subtitle: "biomecánica y evaluación del drop jump y el stiffness",
      description:
        "En esta clase hablaremos de la dinámica del drop jump, la energía potencial elástica y de la aplicación de las herramientas disponibles para su evaluación.",
      videoUrl:
        "https://drive.google.com/file/d/1CuT4FEpGwZ8Qkzf1pmpYqR3sBwpaRBG0/preview",
    },
  ];
  const handleHome = () => {
    navigate("/reader_profile");
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="titles-container">
          <h2 className="title">Tus clases</h2>
          <h2 className="subtitle">
            Curso de análisis del salto vertical con unidades inerciales y
            registro por video
          </h2>
        </div>
        <div className="contenedor-bloques">
          {blocks.map((block, index) => (
            <ClasesBlocks
              key={index}
              date={block.date}
              title={block.title.toUpperCase()}
              subtitle={block.subtitle.toUpperCase()}
              description={block.description}
              videoUrl={block.videoUrl}
            />
          ))}
        </div>

        <button onClick={handleHome}>perfil</button>
      </main>
    </>
  );
};

export default JumpClases;

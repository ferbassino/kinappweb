import React from "react";
// import ReactPlayer from "react-player";
import ClasesBlocks from "../../../components/reader/ClasesBlocks";
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
        "https://storage.googleapis.com/kinapp-web/jump-course/clases/clase1.mp4",
    },
    {
      date: "20/05/2024",
      title: "El salto",
      subtitle: "Introducción al salto vertical",
      description:
        "En esta clase hablaremos sobre los tipos de salto y su importancia en el deporte y en el rendimiento y de los diferentes métodos de evalauación y entre ellos de las unidades inreciales de movimiento disponibles.",
      // videoUrl:
      //   "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4",
    },
    {
      date: "27/05/2024",
      title: "biomecánica",
      subtitle: "biomecánica y evaluación del sj y el cmj",
      description:
        "En esta clase abordaremos las bases biomecánicas de la evaluación de los saltos con y sin contramovimiento, las variables de interes y los datos obtenidos a través de las unidades inerciales y a través de video.",
      // videoUrl:
      //   "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4",
    },
    {
      date: "03/06/2024",
      title: "stiffness",
      subtitle: "biomecánica y evaluación del drop jump y el stiffness",
      description:
        "En esta clase hablaremos de la dinámica del drop jump, la energía potencial elástica y de la aplicación de las herramientas disponibles para su evaluación.",
      // videoUrl:
      //   "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4",
    },
    {
      date: "10/06/2024",
      title: "Cierre",
      subtitle: "Conclusiones del curso",
      description:
        "En esta clase realizaremos un resumen del curso, de la integración de las herramientas expuesta en la práctica diaria y realizaremos una encuesta final.",
      // videoUrl:
      //   "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4",
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
            Próximamente se irán cargando las clases según el programa previsto
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

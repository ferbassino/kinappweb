import React from "react";
import ReactPlayer from "react-player";
import JumpCourseClasesBlocks from "../../components/jumpCourse/JumpCourseClasesBlocks";

const url =
  "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4";
const JumpClases = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();
  const blocks = [
    {
      date: "13/05/2024",
      title: "Introducción",
      subtitle: "Entorno kinapp y presentación del curso",
      description:
        "En este clase nos presentaremos, hablaremos de kinApp, describiremos la aplicación web y cuales son los objetivos del curso",
      videoUrl:
        "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4",
    },
    {
      date: "20/05/2024",
      title: "El salto",
      subtitle: "Introducción al salto vertical",
      description:
        "En esta clase hablaremos sobre los tipos de salto y su importancia en el deporte y en el rendimiento y de los diferentes métodos de evalauación y entre ellos de las unidades inreciales de movimiento disponibles.",
      videoUrl:
        "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4",
    },
    {
      date: "27/05/2024",
      title: "biomecánica",
      subtitle: "biomecánica y evaluación del sj y el cmj",
      description:
        "En esta clase abordaremos las bases biomecánicas de la evaluación de los saltos con y sin contramovimiento, las variables de interes y los datos obtenidos a través de las unidades inerciales y a través de video.",
      videoUrl:
        "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4",
    },
    {
      date: "03/06/2024",
      title: "stiffness",
      subtitle: "biomecánica y evaluación del drop jump y el stiffness",
      description:
        "En esta clase hablaremos de la dinámica del drop jump, la energía potencial elástica y de la aplicación de las herramientas disponibles para su evaluación.",
      videoUrl:
        "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4",
    },
    {
      date: "10/06/2024",
      title: "Cierre",
      subtitle: "Conclusiones del curso",
      description:
        "En esta clase realizaremos un resumen del curso, de la integración de las herramientas expuesta en la práctica diaria y realizaremos una encuesta final.",
      videoUrl:
        "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5  mx-auto">
        <div className="flex flex-col text-center   ">
          <h2 className="sm:text-3xl text-xl py-10 text-blue-900  font-medium title-font mb-1">
            Tus clases
          </h2>
          <h2 className="sm:text-2xl text-xl  text-blue-900  font-medium title-font mb-1">
            Proximamente se irán cargando las clases según el programa previsto
          </h2>
        </div>
        {blocks.map((block, index) => (
          <JumpCourseClasesBlocks
            key={index}
            date={block.date}
            title={block.title.toUpperCase()}
            subtitle={block.subtitle.toUpperCase()}
            description={block.description}
            videoUrl={block.videoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default JumpClases;

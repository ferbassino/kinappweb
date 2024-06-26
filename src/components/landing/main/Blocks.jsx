import Block from "./Block";
import "./Blocks.css";
const Blocks = () => {
  const items = [
    {
      title: "Evalua fácilmente",
      text: "Realiza evaluaciones biomecánicas en cualquier lugar y con recursos tecnológicos de fácil acceso.",
      url: "easy.jpeg",
    },
    {
      title: "Gana tiempo",
      text: "Visualiza los datos analizados de manera inmediata en tu pc, laptop o teléfono móvil",
      url: "time.jpg",
    },
    {
      title: "No pierdas tus datos",
      text: "Los datos analizados se guardan en la nube y podés consultarlos en cualquier momento.",
      url: "storage.jpg",
    },
    {
      title: "Entorno de análisis",
      text: "kinApp es un ecosistema que incluye: dispositivos del registro y de análisis de datos biomecánicos, documentación, grupos de trabajo, canales de discusión y desarrollo de tecnología específica.",
      url: "enviroment.jpeg",
    },
  ];

  return (
    <div className="blocks-container">
      {items.map((item) => (
        <Block
          key={item.title}
          title={item.title}
          text={item.text}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default Blocks;

import Block from "./Block";

const Blocks = () => {
  const items = [
    {
      title: "Evalua fácilmente",
      text: "Realiza evaluaciones biomecánicas en cualquier lugar y con recursos tecnológicos de fácil acceso.",
      url: "https://storage.googleapis.com/kinapp-web/kinapp-web/landing/easy.jpeg",
    },
    {
      title: "Gana tiempo",
      text: "Visualiza los datos analizados de manera inmediata en tu pc, laptop o teléfono móvil",
      url: "https://storage.googleapis.com/kinapp-web/kinapp-web/landing/time.jpg",
    },
    {
      title: "No pierdas tus datos",
      text: "Los datos analizados se guardan en la nube y podés consultarlos en cualquier momento.",
      url: "https://storage.googleapis.com/kinapp-web/kinapp-web/landing/storage.jpg",
    },
    {
      title: "Entorno de análisis",
      text: "kinApp es un ecosistema que incluye: dispositivos del registro y de análisis de datos biomecánicos, documentación, grupos de trabajo, canales de discusión y desarrollo de tecnología específica.",
      url: "https://storage.googleapis.com/kinapp-web/kinapp-web/landing/enviroment.jpeg",
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

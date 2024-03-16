import jump from "../assets/jump.png";
import reloj from "../assets/reloj.jpg";

const Blocks = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900 lg:text-5xl">
              Evalua fácilmente
            </h1>
            <p className="leading-relaxed mt-4 text-2xl lg:text-4xl">
              Realiza evaluaciones biomecánicas en cualquier lugar y con
              recursos tecnológicos de fácil acceso.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <img src={jump} />
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------ */}
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap-reverse items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
            <img src={reloj} />
          </div>
          <div className="lg:w-3/5 md:w-1/2 md:pl-16 lg:pr-0 pr-0 mt-8">
            <h1 className="title-font font-medium text-3xl text-gray-900 lg:text-5xl">
              Gana tiempo
            </h1>
            <p className="leading-relaxed mt-4 text-2xl lg:text-4xl">
              Visualiza los datos analizados de manera inmediata en tu pc,
              laptop o teléfono móvil
            </p>
          </div>
        </div>
      </section>
      {/* -------------------------------------------- */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900 lg:text-5xl">
              No pierdas tus datos
            </h1>
            <p className="leading-relaxed mt-4 text-2xl lg:text-4xl">
              Los datos analizados se guardan en la nube y podés consultarlos en
              cualquier momento.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <img src={jump} />
          </div>
        </div>
      </section>
      {/* -------------------------------------------- */}
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap-reverse items-center  ">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex w-full mt-10 md:mt-0">
            <img src={jump} />
          </div>
          <div className="lg:w-3/5 md:w-1/2 md:pl-16 lg:pr-0 pr-0 mt-8 ">
            <h1 className="title-font font-medium text-3xl text-gray-900 lg:text-5xl">
              Entorno de análisis
            </h1>
            <p className="leading-relaxed mt-4 text-2xl lg:text-4xl">
              kinApp es un ecosistema que incluye: dispositivos del registro y
              de análisis de datos biomecánicos, documentación, grupos de
              trabajo, canales de discusión y desarrollo de tecnología
              específica.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blocks;

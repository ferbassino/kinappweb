import jump from "../assets/jump.png";

const Blocks = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Evaluación rápida y sencilla
            </h1>
            <p className="leading-relaxed mt-4">
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
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
            <img src={jump} />
          </div>
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
            <h1 className="title-font font-medium text-3xl text-gray-900 text-end">
              Datos al instante
            </h1>
            <p className="leading-relaxed mt-4 text-end">
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
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Siempre disponibles
            </h1>
            <p className="leading-relaxed mt-4">
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
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
            <img src={jump} />
          </div>
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
            <h1 className="title-font font-medium text-3xl text-gray-900 text-end">
              Entorno de análisisi
            </h1>
            <p className="leading-relaxed mt-4 text-end">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blocks;

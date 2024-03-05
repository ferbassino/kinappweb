import { Link } from "react-router-dom";
import jumpImage from "../assets/jump.png";
import cursos from "../assets/cursos.jpeg";
const Cursos = () => {
  return (
    <div>
      <div className="text-center mb-20">
        <h1 className="mt-20 sm:text-4xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
          Capacitaciones
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Participa de las capacitaciones para incluir estos recursos
          tecnológicos en tus consultas.
        </p>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center  w-full"
                  src={jumpImage}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Análsis biomecánco del salto vertical
              </h2>
              <p className="leading-relaxed text-base">
                Análisis por video y con dispositivos inerciales del salto
                vertical
              </p>
              <Link
                to="/jump_course"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Ver mas <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={cursos}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Unidades inerciales
              </h2>
              <p className="leading-relaxed text-base">
                Interpretación de los datos registrado por las unidades
                inerciales (I.M.U.)
              </p>
              <p className="leading-relaxed text-base">próximamente</p>
              {/* <Link
                to="/jump_course"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Ver mas <span aria-hidden="true">→</span>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cursos;

import { Link } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import "./Cursos.css";
const Cursos = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 60, left: 0, behavior: "smooth" });
  };
  scrollToTop();
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="cursos-header-container">
        <h1 className="curso-header-title">Capacitaciones</h1>
        <p className="curso-header-subtitle">
          Participa de las capacitaciones para incluir estos recursos
          tecnológicos en tus consultas.
        </p>
      </div>
      <section className="cursos-container">
        <div className="">
          <div className="curso-container">
            <div className="curso-container">
              <h2 className="curse-title">
                Análsis biomecánco del salto vertical
              </h2>
              <p className="curse-subtitle">
                Análisis por video y con dispositivos inerciales del salto
                vertical
              </p>
              <div className="salto-image">
                <img
                  alt="content"
                  className="salto-image"
                  src="https://storage.googleapis.com/kinapp-web/kinapp-web/cursos/jump.png"
                />
              </div>
              <p className="curse-agotado">Agotado</p>
              {/* <Link
                to="/jump_course"
                className="text-2xl font-semibold leading-6 text-gray-900"
              >
                Ver mas <span aria-hidden="true">→</span>
              </Link> */}
            </div>
            <div className="curso-container">
              <h2 className="curse-title">Unidades inerciales</h2>
              <p className="curse-subtitle">
                Interpretación de los datos registrado por las unidades
                inerciales (I.M.U.)
              </p>
              <div className="jornadas-image">
                <img
                  alt="content"
                  className="jornadas-image"
                  src="https://storage.googleapis.com/kinapp-web/kinapp-web/cursos/cursos.jpeg"
                />
              </div>
              <p className="curse-agotado">Agotado</p>
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Cursos;

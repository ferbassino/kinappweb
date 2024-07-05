import { useNavigate } from "react-router-dom";
import { testsContext } from "../../context/TestsContext";
import { useContext } from "react";
import ReaderItems from "../../components/reader/ReaderItems";
import Navbar from "../../components/landing/header/Navbar";
import Footer from "../../components/landing/footer/Footer";
import "./ReaderProfile.css";
const ReaderProfile = () => {
  const { user } = useContext(testsContext);
  const readerOptions = [
    "Análisis guardados",
    "I.M.U. análisis",
    "Video análisis",
    "Tus cursos",
  ];

  const navigate = useNavigate();
  // const { user } = useLogin();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="menu-container">
        <h1 className="titulo">Hola {user.userName}</h1>
        <h2 className="subtitulo">Elegí una opción:</h2>
        <div className="botones-container">
          {readerOptions.map((item) => {
            return <ReaderItems key={item} title={item} />;
          })}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ReaderProfile;

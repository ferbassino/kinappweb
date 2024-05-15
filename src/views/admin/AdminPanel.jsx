import { useNavigate } from "react-router-dom";
import { testsContext } from "../../context/TestsContext";
import { useContext } from "react";
import AdminItems from "../../components/admin/AdminItems";
import Navbar from "../../components/landing/header/Navbar";
import Footer from "../../components/landing/footer/Footer";
import "./AdminProfile.css";

const AdminPanel = () => {
  const { user } = useContext(testsContext);
  const readerOptions = [
    "Usuarios",
    "Clientes",
    "Tests",
    // "Video análisis",
    // "Programa",
    // "Recucrsos kinApp",
    // "Docs",
  ];

  const navigate = useNavigate();
  // const { user } = useLogin();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="menu-container">
        <h1 className="titulo">{user.userName}</h1>
        <h2 className="subtitulo">PANEL DE ADMINISTRADOR</h2>
        <div className="botones-container">
          {readerOptions.map((item) => {
            return <AdminItems key={item} title={item} />;
          })}
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AdminPanel;

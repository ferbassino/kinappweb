import { useNavigate } from "react-router-dom";
import { testsContext } from "../../context/TestsContext";
import { useContext } from "react";
import AdminItems from "../../components/admin/AdminItems";
import Navbar from "../../components/landing/header/Navbar";
import Footer from "../../components/landing/footer/Footer";
import "./AdminProfile.css";
import PaymentButton from "../../components/mercadopago/PaymentButton";

const AdminPanel = () => {
  const { user } = useContext(testsContext);
  const readerOptions = [
    "Usuarios",
    "Tests",
    "Projects",
    // "Video análisis",
    // "Programa",
    // "Recucrsos kinApp",
    // "Docs",
  ];

  const navigate = useNavigate();
  // const { user } = useLogin();
  const title = "test";
  const quantity = 1;
  const price = 100;
  const buttonTitle = "example";
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
        <PaymentButton
          title={title}
          quantity={quantity}
          price={price}
          buttonTitle={buttonTitle}
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AdminPanel;

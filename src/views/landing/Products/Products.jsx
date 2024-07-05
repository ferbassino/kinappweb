import "./Products.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import client from "../../../api/client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import { useParams } from "react-router-dom";
import PaymentButton from "../../../components/mercadopago/PaymentButton";
import Block from "../../../components/landing/main/Block";
import full from "./../../../assets/full.png";
import jump from "./../../../assets/jump.png";
import docs from "./../../../assets/docs.png";
import cursos from "./../../../assets/cursos.jpeg";

const Products = () => {
  let data = useParams();
  const navigate = useNavigate();
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago(`APP_USR-8e90396a-fd28-4c24-81e4-812af239461f`, {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await client.post("/create_preference", {
        title: "Full kinApp user",
        quantity: 1,
        price: 30000,
      });

      const { result } = response.data;
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    createPreference();
    const result = await createPreference();
    console.log(result);
    if (result) {
      setPreferenceId(result);
    }
  };

  // const getPayment = async () => {
  //   const response = await client.get(`/payment/?topic=payment&id=123456`);
  //   console.log("response", response);
  // };

  // useEffect(() => {
  //   getPayment();
  // }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <header>
          <h1 className="products-header-title">Nuestros productos</h1>
        </header>
        <Block
          url={full}
          title={"kinApp full user"}
          text={"Utiliza todos los recursos de kinApp para ganar tiempo"}
          buttonText={"obtener ..."}
          handleProduct={() => navigate("/full")}
        />
        <Block
          url={jump}
          title={"Jump apk"}
          text={
            "Descarga Jump para dispositivos android y analiza el salto vertical de manera rápida y sencilla"
          }
          buttonText={"descargar..."}
          handleProduct={() => navigate("/downloads")}
        />
        <Block
          url={cursos}
          title={"Capacitaciones"}
          text={
            "inscribite en nuestras capacitaciones sobre biomecánica y tecnología de evaluación"
          }
          buttonText={"ver capacitaciones"}
          handleProduct={() => navigate("/courses")}
        />
        <Block
          url={docs}
          title={"Documentación"}
          text={
            "Accede a la toda la documentación en biomecánica, tutoriales paso a paso para navegar el entorno y utilización de los recursos"
          }
          buttonText={"ir a documentación..."}
          handleProduct={() =>
            alert("Próximamente podras acceder a la documentación")
          }
          // handleProduct={() => navigate("/docs")}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Products;

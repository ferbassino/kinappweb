import logo from "../../../assets/logo.png";
import "./Products.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import client from "../../../api/client";

import { useEffect, useState } from "react";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import { useParams } from "react-router-dom";
const Products = () => {
  let data = useParams();

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
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    createPreference();
    const result = await createPreference();

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
        <div className="card-product-container">
          <div className="card-product">
            <div className="card-container">
              <img src={logo} alt="Product Image" />
              <h3 className="h3-products">kinApp FULL USER</h3>
              <h3 className="h3-products">
                Gana tiempo y obtiene todos los recursos disponibles
              </h3>

              <div className="products-column">
                <h2 className="h2-products">✅ Descarga de Jump.apk</h2>
                <h2 className="h2-products">
                  ✅ Acceso a variables cinemáticas y gráficas del entorno
                </h2>
                <h2 className="h2-products">
                  ✅ Acceso a variables dinámicas del entorno
                </h2>
                <h2 className="h2-products">
                  ✅ Acceso completo del análisis por video
                </h2>
                <h2 className="h2-products">
                  ✅ Almacenamiento en dispositivos
                </h2>
                <h2 className="h2-products">✅ Almacenamiento en la nube</h2>
                <h2 className="h2-products">✅ Entorno personalizado</h2>
              </div>
              <p className="price-product">AR$ 30000</p>
              <button onClick={handleBuy}>Comprar por un año</button>
              {preferenceId && (
                <Wallet
                  initialization={{ preferenceId: preferenceId }}
                  customization={{ texts: { valueProp: "smart_option" } }}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Products;

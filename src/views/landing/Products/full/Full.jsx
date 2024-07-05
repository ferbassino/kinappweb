import React from "react";
import Navbar from "../../../../components/landing/header/Navbar";
import Footer from "../../../../components/landing/footer/Footer";
import PaymentButton from "../../../../components/mercadopago/PaymentButton";
import logo from "../../../../assets/logo.png";
import "./Full.css";

export default function Full() {
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
              <PaymentButton
                title="kinApp full user"
                quantity={1}
                price={30000}
                buttonTitle={"comprar por un año"}
              />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

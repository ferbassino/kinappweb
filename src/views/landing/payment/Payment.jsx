import React from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();
  const handleFullUser = () => {
    navigate("/products");
  };
  return (
    <>
      <div className="first-month-container">
        <h1 className="first-month">
          ¡Podés utilizar todos los recursos como 'Full user' durante el primer
          mes desde tu suscripción!
        </h1>
      </div>

      <div className="payment-container">
        <div className="payment-column">
          <h1 className="h1-payment">FREE USER</h1>
          <h2 className="h2-payment">✅ Descarga de Jump.apk</h2>
          <h2 className="h2-payment">
            ✅ Acceso a variables cinemáticas y gráficas del entorno
          </h2>
          <h2 className="h2-payment">
            ❌ Acceso a variables dinámicas del entorno
          </h2>
          <h2 className="h2-payment">
            ❌ Acceso completo del análisis por video
          </h2>
          <h2 className="h2-payment">✅ Almacenamiento en dispositivos</h2>
          <h2 className="h2-payment">❌ Almacenamiento en la nube</h2>
          <h2 className="h2-payment">❌ Entorno personalizado</h2>
          <p className="p-payment">FREE</p>
        </div>
        <div
          className="payment-column payment-column-full"
          onClick={handleFullUser}
        >
          <h1 className="h1-payment">FULL USER</h1>
          <h2 className="h2-payment">✅ Descarga de Jump.apk</h2>
          <h2 className="h2-payment">
            ✅ Acceso a variables cinemáticas y gráficas del entorno
          </h2>
          <h2 className="h2-payment">
            ✅ Acceso a variables dinámicas del entorno
          </h2>
          <h2 className="h2-payment">
            ✅ Acceso completo del análisis por video
          </h2>
          <h2 className="h2-payment">✅ Almacenamiento en dispositivos</h2>
          <h2 className="h2-payment">✅ Almacenamiento en la nube</h2>
          <h2 className="h2-payment">✅ Entorno personalizado</h2>
          <p className="p-payment">AR$ 30.000 anuales</p>
        </div>
      </div>
    </>
  );
};

export default Payment;

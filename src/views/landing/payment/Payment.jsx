import React from "react";
import "./Payment.css";
const Payment = () => {
  return (
    <div className="payment-container">
      <div className="payment-column">
        <h1 className="h1-payment">USUARIO FREE</h1>
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
      <div className="payment-column">
        <h1 className="h1-payment">USUARIO COMPLETO</h1>
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
  );
};

export default Payment;

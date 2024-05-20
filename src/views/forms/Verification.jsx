import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/landing/header/Navbar";
import Footer from "../../components/landing/footer/Footer";
import "./Verification.css";
import client from "../../api/client";

import { useNavigate, useParams } from "react-router-dom";
const Verification = () => {
  const { userId } = useParams();

  const navigate = useNavigate();
  const [verificationNumber, setVerificationNumber] = useState("");
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

  const handleVerification = async () => {
    try {
      const response = await client.post("/verify-email", {
        otp: verificationNumber,
        userId,
      });

      if (!response.data.success) {
        setMessage(
          "El número de verificación no es el correcto, chequee en su correo y vuelva a intentarlo por favor"
        );
        setMessageVisible(true);
        setTimeout(() => {
          setMessage("");
          setMessageVisible(false);
        }, 5000);
      }
      setMessage(
        "¡Le damos la bienvenida a kinApp, la validación de su cuenta se realizó con éxito, ya puede empezar a navegar por el entorno!"
      );
      setMessageVisible(true);
      setTimeout(() => {
        setMessage("");
        setMessageVisible(false);
        navigate("/");
      }, 7000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-verification">
        {messageVisible ? (
          <>
            <div className="verification-container">
              <div className="title-verification-container">
                <h3>{message}</h3>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="verification-container">
              <div className="title-verification-container">
                <h3>
                  Hemos enviado un email con el número de verificación de su
                  cuenta, por favor ingréselo aquí y envíelo para completar el
                  registro
                </h3>
              </div>

              <div className="input-verification-container">
                <input
                  type="text"
                  className="input-verification"
                  maxLength={4}
                  onChange={(e) => setVerificationNumber(e.target.value)}
                />
              </div>
              <div id="input-submit-verification-container">
                <input
                  id="input-submit-verification"
                  type="submit"
                  onClick={handleVerification}
                />
              </div>
            </div>
          </>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Verification;

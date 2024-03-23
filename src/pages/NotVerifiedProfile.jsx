import React, { useState } from "react";
import kinAppLogo from "./../assets/kinapp_logo.svg";
import client from "../api/client";
import HashLoader from "react-spinners/HashLoader";
import SuccessVerification from "../components/SuccessVerification";
import { useNavigate } from "react-router-dom";
const NotVerifiedProfile = (props) => {
  const navigate = useNavigate();
  const { profile } = props;
  const [successVerification, setSuccessVerification] = useState(false);
  const [verificationNumber, setVerificationNumber] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginPending, setLoginPending] = useState(false);

  const handleVerification = async (e) => {
    e.preventDefault();

    setLoginPending(true);

    try {
      const response = await client.post("/verify-email", {
        userId: profile.id,
        otp: verificationNumber,
      });

      if (response.data.success) {
        const result = await client.put(
          `user/${profile.id}`,
          {
            verified: true,
          },
          { new: true }
        );

        if (result.data.success) {
          setLoginPending(false);
          setSuccessVerification(true);
          setTimeout(() => {
            SuccessVerification(false);
            navigate("/");
          }, 6000);
        } else {
          setLoginPending(false);
          alert("tu verificación no pudo realizarse");
        }
      }
      console.log(response.response.data);
      if (!response.data.success) {
        setError(true);
        setErrorMessage(
          "El código de 4 dígitos no es válido, vuelva a intentarlo"
        );
      }
      console.log(response.response.data.success);
    } catch (error) {
      setLoginPending(false);
      console.log(error);
      setError(true);
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setVerificationNumber("");
        setError(false);
        setErrorMessage("");
      }, 5000);
    }
  };
  return (
    <>
      {loginPending ? (
        <>
          <HashLoader
            color={"#011a42"}
            loading={loginPending}
            cssOverride={{
              display: "block",
              margin: "0 auto",
              borderColor: "#011a42",
            }}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        <>
          {successVerification ? (
            <>
              <SuccessVerification
                userName={profile.userName}
                email={profile.email}
              />
            </>
          ) : (
            <></>
          )}
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img src={kinAppLogo} alt="kinapp_logo" className="h-20 "></img>
              <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className=" lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                  <p className="leading-relaxed mt-4">
                    Tu perfil no está verificado
                  </p>
                  <p className="leading-relaxed mt-4">
                    Ingresa abajo el número de verificación de cuatro dígitos
                    que te enviamos y hacé click en enviar para completar tu
                    inscripción
                  </p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                  <form onSubmit={handleVerification}>
                    <div className="relative mb-4">
                      <label
                        htmlFor="user_name"
                        className="leading-7 text-sm text-gray-600"
                        name="userName"
                        id="userName"
                      >
                        N° de verificación
                      </label>
                      <input
                        // disabled
                        onChange={(e) => setVerificationNumber(e.target.value)}
                        value={verificationNumber}
                        type="setVerificationNumber"
                        id="setVerificationNumber"
                        name="setVerificationNumber"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>

                    <button className="text-white bg-blue-950 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
                      Enviar
                    </button>
                  </form>
                  {error ? (
                    <p className="text-sm text-red-600 mt-3">{errorMessage}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default NotVerifiedProfile;

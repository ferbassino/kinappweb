import React, { useState } from "react";
import kinAppLogo from "./../assets/kinapp_logo.svg";
import client from "../api/client";
import SuccessForgot from "./SuccessForgot";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [successfullysendLink, setSuccessfullysendLink] = useState(false);
  const [loginPending, setLoginPending] = useState(false);
  const navigate = useNavigate();

  const handleForgot = async () => {
    try {
      if (!email) {
        setError("you must enter an email");
        setTimeout(() => {
          setError("");
        }, 3000);
      }
      setLoginPending(true);
      const res = await client.post("/forgot-password", { email });

      if (!res.data.success) {
        setLoginPending(false);
        setError(res.data.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
      if (res.data.success) {
        setLoginPending(false);
        setSuccessfullysendLink(true);

        setTimeout(() => {
          setSuccessfullysendLink(true);
          navigate("/");
          setEmail("");
          setError("");
          setSuccessfullysendLink(false);
        }, 5000);
      }
    } catch (error) {
      setLoginPending(false);
      console.log(error.message);
    }
  };
  return (
    <div>
      {loginPending ? (
        <>
          <div className="spinner-Container">
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
          </div>
        </>
      ) : (
        <>
          {successfullysendLink ? (
            <>
              <SuccessForgot email={email} />
            </>
          ) : (
            <>
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                  <img
                    src={kinAppLogo}
                    alt="kinapp_logo"
                    className="h-20 "
                  ></img>
                  <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    <p className="mb-8 leading-relaxed">
                      Ingresa tu email para reestablecer tu contraseña
                    </p>
                    {error ? (
                      <p className="mb-8 leading-relaxed text-red-700">
                        {error}
                      </p>
                    ) : null}
                    <div className="flex flex-wrap w-full justify-center items-end">
                      <div className=" relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                        <label
                          htmlFor="hero-field"
                          className="leading-7 text-sm text-gray-600"
                        >
                          email
                        </label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="text"
                          id="hero-field"
                          name="hero-field"
                          className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <button
                        onClick={handleForgot}
                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Enviar
                      </button>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                      Revisa tu correo para encontrar el link de restauración
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ForgotPassword;

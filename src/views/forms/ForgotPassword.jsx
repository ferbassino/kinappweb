import React, { useState, useRef, useContext } from "react";
// import kinAppLogo from "../../assets/kinapp_logo.svg";
import client from "../../api/client";
import SuccessForgot from "../../components/logins/SuccessForgot";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import Navbar from "../../components/landing/header/Navbar";
import Footer from "../../components/landing/footer/Footer";
import { testsContext } from "../../context/TestsContext";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [successfullysendLink, setSuccessfullysendLink] = useState(false);
  const [text, setText] = useState("");
  const [loginPending, setLoginPending] = useState(false);
  const navigate = useNavigate();

  const { handleUser, user } = useContext(testsContext);

  const password = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  password.current = watch("password", "");

  const onSubmit = handleSubmit((data) => {
    setLoginPending(true);
    setEmail(data.email);

    try {
      const getResponseForgot = async () => {
        const res = await client.post("/forgot-password", {
          email: data.email,
        });

        if (!res.data.success) {
          setLoginPending(false);
          setSuccessfullysendLink(true);
          setText(`${email} no está registrado`);
          setTimeout(() => {
            setSuccessfullysendLink(false);
            setText("");
          }, 3000);
        }
        if (res.data.success) {
          setLoginPending(false);
          setSuccessfullysendLink(true);
          setText(
            `Se envió un link a ${email} para reestablecer la contraseña`
          );
          setTimeout(() => {
            setText("");
            navigate("/");
            setSuccessfullysendLink(false);
          }, 5000);
        }
      };

      getResponseForgot();
      reset();
    } catch (error) {
      setLoginPending(false);
      console.log(error.message);
    } finally {
      setLoginPending(false);
    }
  });

  return (
    <>
      <header>
        <Navbar />
      </header>
      {loginPending ? (
        <h1>enviando</h1>
      ) : (
        <>
          {successfullysendLink ? (
            <>
              <SuccessForgot text={text} />
            </>
          ) : (
            <>
              <h3 className="ingresar-mensaje">
                Ingresa tu email para reestablecer tu contraseña
              </h3>
              {/* ------------------------------------------- */}
              <div className="formulario-container">
                <form className="formulario" onSubmit={onSubmit}>
                  <div className="campo">
                    <label htmlFor="email" className="label-login">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "El email es requerido...",
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                          message: "El formato del email no es válido",
                        },
                      })}
                    />
                    <p> {errors.email?.message}</p>
                  </div>

                  <input id="submit" type="submit" name="enviar" />
                </form>
              </div>
              {/* ------------------------------------------- */}
            </>
          )}
        </>
      )}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ForgotPassword;

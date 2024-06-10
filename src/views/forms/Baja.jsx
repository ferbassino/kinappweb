import { NavLink } from "react-router-dom";
import Navbar from "../../components/landing/header/Navbar";
import Footer from "../../components/landing/footer/Footer";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useRef } from "react";
import login from "../../services/login";
import { testsContext } from "../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import client from "../../api/client";
import ExpiredRoleMessage from "../../components/messages/ExpiredRoleMessage";
import logout from "../../services/logout";

import Loader from "../../components/basics/Loader";

const Baja = () => {
  const { handleUser, handleLoading, handleLogout } = useContext(testsContext);

  const navigate = useNavigate();
  const [expiredMessageVisible, setExpiredMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      const credentials = { email: data.email, password: data.password };
      const getCurrentUser = async () => {
        const res = await login(credentials);

        if (!res.success) {
          setLoading(false);
          setErrorMessage(res.message);
          setErrorMessageVisible(true);
          setTimeout(() => {
            setErrorMessageVisible(false);
            setErrorMessage("");
            reset();
          }, 5000);
        } else if (res.success) {
          const id = res.user.id;
          const response = await client.delete(`/api/user/${id}`);

          if (!response.data.success) {
            setLoading(false);
            setErrorMessageVisible(true);
            setErrorMessage(
              "Ocurrió un error eliminando su cuenta, vuelva a intntarlo mas tarde"
            );
            setTimeout(() => {
              setErrorMessageVisible(false);
              setErrorMessage("");
              navigate("/");
            }, 4000);
          } else {
            setLoading(false);
            setErrorMessageVisible(true);
            setErrorMessage("Su cuenta se eliminó con éxito");
            setTimeout(() => {
              setErrorMessageVisible(false);
              setErrorMessage("");
              navigate("/");
              handleLogout();
            }, 4000);
          }

          setLoading(false);
        }
      };
      getCurrentUser();
      reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  });

  return (
    <>
      <header>
        <Navbar />
      </header>

      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {expiredMessageVisible ? (
            <>
              <ExpiredRoleMessage />
            </>
          ) : (
            <>
              <h2 className="baja-title">Darse de baja de kinApp</h2>
              <h3 className="baja-sub-title">
                Ingrese el email y la contraseña para darse de baja
              </h3>
              {errorMessageVisible ? (
                <h2 className="error-message">{errorMessage}</h2>
              ) : (
                <h2 className="error-message-ghost"> </h2>
              )}

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
                  <div className="campo">
                    <label htmlFor="password" className="label-login">
                      Contraseña
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "La contraseña es requerida...",
                        },
                        minLength: {
                          value: 8,
                          message: "La contraseña debe tener 8 caracteres",
                        },
                        maxLength: {
                          value: 8,
                          message: "La contraseña debe tener 8 caracteres",
                        },
                      })}
                    />
                    <p> {errors.password?.message}</p>
                  </div>

                  <input id="submit" type="submit" name="enviar" />
                  <div className="forgot-container">
                    <NavLink to={"/forgot_password"} className="forgot">
                      ¿Olvidó la contraseña?
                    </NavLink>
                  </div>
                </form>
              </div>
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

export default Baja;

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
import getDifferenceNowMonth from "../../auxiliaries/basics/getDifferenceNowMonth";

import { updateUser } from "../../services/userServices";

import ExpiredRoleMessage from "../../components/messages/ExpiredRoleMessage";
import logout from "../../services/logout";
import { useEffect } from "react";

const LoginForm = () => {
  const { handleUser, users } = useContext(testsContext);

  const navigate = useNavigate();
  const [expiredMessageVisible, setExpiredMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    try {
      const credentials = { email: data.email, password: data.password };
      const currentUser = users.find((user) => user.email === data.email);

      const userId = currentUser._id;
      if (!currentUser.verified) {
        setErrorMessage(
          "El email no está verificado, por favor chequee su correo para encontrar el número que hemos enviado."
        );
        setErrorMessageVisible(true);
        setTimeout(() => {
          setErrorMessageVisible(false);
          setErrorMessage("");
          navigate(`/verification/${userId}`);
          return;
        }, 5000);
      } else {
        const getCurrentUser = async () => {
          const res = await login(credentials);

          if (!res.success) {
            setErrorMessage(res.message);
            setErrorMessageVisible(true);
            setTimeout(() => {
              setErrorMessageVisible(false);
              setErrorMessage("");
              reset();
            }, 5000);
          } else {
            handleUser(res.user);

            if (res.user.roles === "reader") {
              navigate("/reader_profile");
            }
            if (res.user.roles === "admin") {
              navigate("/admin_panel");
            }
            if (res.user.roles === "editor") {
              const { initialDate } = res.user;
              const diasDesdeInicio = getDifferenceNowMonth(initialDate);

              if (diasDesdeInicio > 31 && res.user.level === "cero") {
                const changeExpiredRole = async () => {
                  try {
                    const id = res.user.id;
                    const values = {
                      roles: "reader",
                    };
                    const res = await updateUser(id, values);
                    if (res.success) {
                      localStorage.removeItem("user");
                      logout();
                    }
                  } catch (error) {
                    console.log(error);
                  }
                };
                changeExpiredRole();
              }
              navigate("/reader_profile");
            }
          }
        };
        getCurrentUser();
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <header>
        <Navbar />
      </header>
      {expiredMessageVisible ? (
        <>
          <ExpiredRoleMessage />
        </>
      ) : (
        <>
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
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
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
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
};

export default LoginForm;

import Navbar from "../../components/landing/header/Navbar";
import Footer from "../../components/landing/footer/Footer";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useRef } from "react";
import { testsContext } from "../../context/TestsContext";

import "./LoginForm.css";
import client from "../../api/client";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const password = useRef(null);
  const { user, handleUser } = useContext(testsContext);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  password.current = watch("password", "");
  // {"email":"oestebiomecanica@gmail.com"}
  // {"email":"kinappbiomechanics@gmail.com"}
  const onSubmit = handleSubmit((data) => {
    const signUp = async () => {
      try {
        const response = await client.post("/create-user", {
          ...data,
        });

        if (response.data.success) {
          const res = await client.post("/sign-in", {
            email: response.data.user.email,
            password: data.password,
          });

          if (res.data.success) {
            navigate(`/verification/${res.data.user.id}`);
          }
        }
        if (!response.data.success) {
          setErrorMessage(response.data.message);
          setErrorMessageVisible(true);
          setTimeout(() => {
            setErrorMessage("");
            setErrorMessageVisible(false);
          }, 5000);
        }
      } catch (error) {
        if (error?.response?.data) {
          return error.response.data;
        }

        return { success: false, error: error.message };
      }
    };
    signUp();
    reset();
  });

  return (
    <>
      <Navbar />
      {errorMessageVisible ? (
        <h2 className="error-message-register">{errorMessage}</h2>
      ) : (
        <h2 className="error-message-ghost-registes"> </h2>
      )}
      <div className="formulario-container">
        <form className="formulario" onSubmit={onSubmit}>
          <div className="campo">
            <label className="label-login" htmlFor="userName">
              Nombre de usuario
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              {...register("userName", {
                required: {
                  value: true,
                  message: "El nombre de usuario es requerido...",
                },
                minLength: {
                  value: 3,
                  message:
                    "El nombre de usuario debe tener 3 caracteres como mínimo",
                },
                maxLength: {
                  value: 30,
                  message:
                    "El nombre de usuario debe tener 30 caracteres como máximo",
                },
              })}
            />
            <p> {errors.userName?.message}</p>
          </div>
          <div className="campo">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Contraseña</label>
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
          <div className="campo">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "La confirmación de la contraseña es requerida...",
                },
                validate: (value) => {
                  return (
                    value === password.current ||
                    "Las contraseñas deben ser iguales"
                  );
                },
              })}
            />
            <p> {errors.confirmPassword?.message}</p>
          </div>
          <input id="submit" type="submit" name="enviar" />
        </form>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Register;

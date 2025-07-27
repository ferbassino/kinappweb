import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useRef } from "react";
import { testsContext } from "../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import client from "../../../api/client";
import Navbar from "../../../components/landing/header/Navbar";
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import "./CreateUser.css";

const CreateUser = () => {
  const navigate = useNavigate();
  const { handleUser } = useContext(testsContext);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const password = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await client.post("/create-user", data);

      if (response.data.success) {
        const res = await client.post("/sign-in", {
          email: response.data.user.email,
          password: data.password,
        });

        if (res.data.success) {
          navigate(`/admin_panel`);
        }
      } else {
        setErrorMessage(response.data.message);
        setErrorMessageVisible(true);
        setTimeout(() => {
          setErrorMessage("");
          setErrorMessageVisible(false);
        }, 5000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error en el registro");
      setErrorMessageVisible(true);
      setTimeout(() => {
        setErrorMessage("");
        setErrorMessageVisible(false);
      }, 5000);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="reg-container">
      <Navbar />

      <main className="reg-main">
        {errorMessageVisible && (
          <div className="reg-error-message">
            <div className="reg-error-content">
              <span className="reg-error-icon">!</span>
              <p>{errorMessage}</p>
            </div>
          </div>
        )}

        <form className="reg-form" onSubmit={onSubmit}>
          <h2 className="reg-title">Crear nueva cuenta</h2>

          <div className="reg-input-group">
            <label htmlFor="userName" className="reg-label">
              <FaUser className="reg-input-icon" />
              Nombre de usuario
            </label>
            <div className="reg-input-container">
              <input
                type="text"
                id="userName"
                className={`reg-input ${
                  errors.userName ? "reg-input-error" : ""
                }`}
                {...register("userName", {
                  required: {
                    value: true,
                    message: "El nombre de usuario es requerido",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Máximo 30 caracteres",
                  },
                })}
              />
              {errors.userName && (
                <p className="reg-error-text">{errors.userName.message}</p>
              )}
            </div>
          </div>

          <div className="reg-input-group">
            <label htmlFor="email" className="reg-label">
              <FaEnvelope className="reg-input-icon" />
              Email
            </label>
            <div className="reg-input-container">
              <input
                type="text"
                id="email"
                className={`reg-input ${errors.email ? "reg-input-error" : ""}`}
                {...register("email", {
                  required: {
                    value: true,
                    message: "El email es requerido",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Formato de email inválido",
                  },
                })}
              />
              {errors.email && (
                <p className="reg-error-text">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="reg-input-group">
            <label htmlFor="password" className="reg-label">
              <FaLock className="reg-input-icon" />
              Contraseña
            </label>
            <div className="reg-input-container">
              <input
                type="password"
                id="password"
                className={`reg-input ${
                  errors.password ? "reg-input-error" : ""
                }`}
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es requerida",
                  },
                  minLength: {
                    value: 8,
                    message: "Debe tener 8 caracteres",
                  },
                  maxLength: {
                    value: 8,
                    message: "Debe tener 8 caracteres",
                  },
                })}
              />
              {errors.password && (
                <p className="reg-error-text">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="reg-input-group">
            <label htmlFor="confirmPassword" className="reg-label">
              <FaLock className="reg-input-icon" />
              Confirmar contraseña
            </label>
            <div className="reg-input-container">
              <input
                type="password"
                id="confirmPassword"
                className={`reg-input ${
                  errors.confirmPassword ? "reg-input-error" : ""
                }`}
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirma tu contraseña",
                  },
                  validate: (value) =>
                    value === password.current ||
                    "Las contraseñas no coinciden",
                })}
              />
              {errors.confirmPassword && (
                <p className="reg-error-text">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="reg-submit-button"
            disabled={loading}
          >
            {loading ? "Creando cuenta..." : "Crear usuario"}
            <FaArrowRight className="reg-submit-icon" />
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateUser;

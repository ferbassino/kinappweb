import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useRef } from "react";
import login from "../../services/login";
import { testsContext } from "../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import ExpiredRoleMessage from "../../components/messages/ExpiredRoleMessage";
import Loader from "../../components/basics/Loader";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import "./LoginForm.css";

const LoginForm = () => {
  const { handleUser, handleLoading } = useContext(testsContext);
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
        } else {
          handleUser(res.user);
          if (res.user.roles === "admin") {
            navigate("/admin_panel");
            setLoading(false);
          }
        }
      };
      getCurrentUser();
      reset();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="lf-container">
      {loading ? (
        <div className="lf-loader-container">
          <Loader />
        </div>
      ) : expiredMessageVisible ? (
        <ExpiredRoleMessage />
      ) : (
        <>
          {errorMessageVisible && (
            <div className="lf-error-message">
              <div className="lf-error-content">
                <span className="lf-error-icon">!</span>
                <p>{errorMessage}</p>
              </div>
            </div>
          )}

          <form className="lf-form" onSubmit={onSubmit}>
            <div className="lf-input-group">
              <label htmlFor="email" className="lf-label">
                <FaEnvelope className="lf-input-icon" />
                Email
              </label>
              <div className="lf-input-container">
                <input
                  type="text"
                  id="email"
                  className={`lf-input ${errors.email ? "lf-input-error" : ""}`}
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
                {errors.email && (
                  <p className="lf-error-text">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="lf-input-group">
              <label htmlFor="password" className="lf-label">
                <FaLock className="lf-input-icon" />
                Contraseña
              </label>
              <div className="lf-input-container">
                <input
                  type="password"
                  id="password"
                  className={`lf-input ${
                    errors.password ? "lf-input-error" : ""
                  }`}
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
                {errors.password && (
                  <p className="lf-error-text">{errors.password.message}</p>
                )}
              </div>
            </div>

            <button type="submit" className="lf-submit-button">
              Ingresar <FaArrowRight className="lf-submit-icon" />
            </button>

            <div className="lf-forgot-password">
              <NavLink to="/forgot_password" className="lf-forgot-link">
                ¿Olvidó la contraseña?
              </NavLink>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginForm;

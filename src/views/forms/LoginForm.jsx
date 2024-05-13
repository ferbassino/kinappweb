import { NavLink } from "react-router-dom";
import Navbar from "../../components/landing/header/Navbar";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useRef } from "react";
import login from "../../services/login";
import { testsContext } from "../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const { handleUser, user } = useContext(testsContext);
  const navigate = useNavigate();

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
    const credentials = { email: data.email, password: data.password };
    const getCurrentUser = async () => {
      const user = await login(credentials);

      handleUser(user);
      navigate("/reader_profile");
    };
    getCurrentUser();
    reset();
  });

  return (
    <>
      <header>
        <Navbar />
      </header>
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
        </form>
      </div>
    </>
  );
};

export default LoginForm;

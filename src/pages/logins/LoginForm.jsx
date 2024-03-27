import { useState } from "react";
import { useLogin } from "../../context/LoginProvider";
import { Link } from "react-router-dom";

const LoginForm = ({
  error,
  email,
  password,
  handleOnchangeEmail,
  handleOnchangePassword,
  handleSubmit,
}) => {
  const { errorMessage } = useLogin();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Lleva tu análisis biomecánico al siguiente nivel con kinApp
          </h1>
          <p className="leading-relaxed mt-4">comencemos...</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
                name="email"
                id="1"
              >
                Email
              </label>
              <input
                required
                onChange={handleOnchangeEmail}
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
                name="password"
                id="2"
              >
                Password
              </label>
              <input
                required
                onChange={handleOnchangePassword}
                value={password}
                type="text"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-blue-950 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
              Send
            </button>
          </form>
          <Link to={"/forgot-password"} className="text-sm text-blue-600 mt-3">
            ¡olvidó la contraseña?
          </Link>
          {error ? (
            <p className="text-sm text-red-600 mt-3">{errorMessage}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

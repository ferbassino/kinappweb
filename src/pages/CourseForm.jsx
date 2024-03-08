import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginProvider";
import client from "../api/client";

const CourseForm = () => {
  const { errorMessage } = useLogin();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setProfile, setErrorMessage } = useLogin();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, email, password, confirmPassword);
    try {
      const response = await client.post("/create-user", {
        userName,
        email,
        password,
        confirmPassword,
      });
      if (response) {
        if (response.data.success) {
          const { id } = response.data.user;
          console.log(id);
          const result = await client.put(
            `user/${id}`,
            {
              roles: "jumpCourse2024",
            },
            { new: true }
          );
          console.log(result);
        }

        setPassword("");
        setEmail("");
      } else {
        setError(true);
        setErrorMessage("Email o password incorrectos");
        setTimeout(() => {
          setErrorMessage(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Curso de análisis del salto vertical
          </h1>
          <p className="leading-relaxed mt-4">
            Completá el formulario para inscribirte al curso
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          {/* <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2> */}
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="user_name"
                className="leading-7 text-sm text-gray-600"
                name="userName"
                id="userName"
              >
                User name
              </label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                type="userName"
                id="userName"
                name="userName"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
                name="email"
                id="email"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
                name="password"
                id="2"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type=""
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="repeatPassword"
                className="leading-7 text-sm text-gray-600"
                name="repeatPassword"
                id="2"
              >
                Confirm Password
              </label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-blue-950 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
              Send
            </button>
          </form>
          {error ? (
            <p className="text-sm text-red-600 mt-3">{errorMessage}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default CourseForm;

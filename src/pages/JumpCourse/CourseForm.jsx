import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginProvider";
import client from "../../api/client";
import HashLoader from "react-spinners/HashLoader";
import SuccessVerification from "../../components/logins/SuccessVerification";
import("./CourseForm.css");
const CourseForm = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [virifiedVisible, setVerifiedVisible] = useState(false);
  const [userToVerified, setUserToVerified] = useState({});
  const [loginPending, setLoginPending] = useState(false);
  const [successVerification, setSuccessVerification] = useState(false);
  const [verificationNumber, setVerificationNumber] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginPending(true);
    try {
      const response = await client.post("/create-user", {
        userName,
        email,
        password,
        confirmPassword,
      });
      if (response) {
        if (!response.data.success) {
          setLoginPending(false);
          setError(true);
          setErrorMessage(response.data.message);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
        if (response.data.success) {
          setUserToVerified(response.data.user);
          setVerifiedVisible(true);
          const { id } = response.data.user;

          const result = await client.put(
            `user/${id}`,
            {
              roles: "jumpCourse2024",
            },
            { new: true }
          );
          setLoginPending(false);
        }
        setLoginPending(false);
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setLoginPending(false);
        setError(true);
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrorMessage("Email o password incorrectos");
        setTimeout(() => {
          setErrorMessage(false);
        }, 5000);
      }
      setLoginPending(false);
    } catch (error) {
      setLoginPending(false);
      console.log(error);
    }
  };
  const handleVerification = async (e) => {
    e.preventDefault();

    setLoginPending(true);

    try {
      const response = await client.post("/verify-email", {
        userId: userToVerified.id,
        otp: verificationNumber,
      });

      if (response.data.success) {
        const result = await client.put(
          `user/${userToVerified.id}`,
          {
            verified: true,
          },
          { new: true }
        );

        if (result.data.success) {
          setLoginPending(false);
          setSuccessVerification(true);
          setTimeout(() => {
            SuccessVerification(false);
            navigate("/");
          }, 6000);
        } else {
          setLoginPending(false);
          alert("tu verificación no pudo realizarse");
        }
      }

      if (!response.data.success) {
        setError(true);
        setErrorMessage(
          "El código de 4 dígitos no es válido, vuelva a intentarlo"
        );
      }
    } catch (error) {
      setLoginPending(false);
      console.log(error);
      setError(true);
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setVerificationNumber("");
        setError(false);
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <>
      {successVerification ? (
        <>
          <SuccessVerification
            userName={userToVerified.userName}
            email={userToVerified.email}
          />
        </>
      ) : (
        <>
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
              <section className="text-gray-600 body-font">
                {virifiedVisible ? (
                  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className=" lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                      <h1 className="title-font font-medium text-2xl text-gray-900">
                        {userToVerified.userName}, enviamos un mail a:{" "}
                        {userToVerified.email}
                      </h1>
                      <p className="leading-relaxed mt-4">
                        Ingresa abajo el número de verificación de cuatro
                        dígitos que te enviamos y hacé click en enviar para
                        completar tu inscripción
                      </p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                      <form onSubmit={handleVerification}>
                        <div className="relative mb-4">
                          <label
                            htmlFor="user_name"
                            className="leading-7 text-sm text-gray-600"
                            name="userName"
                            id="userName"
                          >
                            N° de verificación
                          </label>
                          <input
                            // disabled
                            onChange={(e) =>
                              setVerificationNumber(e.target.value)
                            }
                            value={verificationNumber}
                            type="setVerificationNumber"
                            id="setVerificationNumber"
                            name="setVerificationNumber"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>

                        <button className="text-white bg-blue-950 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">
                          Enviar
                        </button>
                      </form>
                      {error ? (
                        <p className="text-sm text-red-600 mt-3">
                          {errorMessage}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ) : (
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
                            // disabled
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
                            // disabled
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
                            // disabled
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
                            // disabled
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
                        <p className="text-sm text-red-600 mt-3">
                          {errorMessage}
                        </p>
                      ) : null}
                    </div>
                  </div>
                )}
              </section>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CourseForm;

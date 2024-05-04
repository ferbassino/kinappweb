import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginProvider";
import client from "../../api/client";
import HashLoader from "react-spinners/HashLoader";
import SuccessVerification from "../../components/logins/SuccessVerification";
import { useForm } from "react-hook-form";
import("./CourseForm.css");

const CourseForm = () => {
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
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  password.current = watch("password", "");

  const navigate = useNavigate();

  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [virifiedVisible, setVerifiedVisible] = useState(false);
  const [userToVerified, setUserToVerified] = useState({});
  const [loginPending, setLoginPending] = useState(false);
  const [successVerification, setSuccessVerification] = useState(false);
  const [verificationNumber, setVerificationNumber] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoginPending(true);
  //   try {
  //     const response = await client.post("/create-user", {
  //       userName,
  //       email,
  //       password,
  //       confirmPassword,
  //     });
  //     if (response) {
  //       if (!response.data.success) {
  //         setLoginPending(false);
  //         setError(true);
  //         setErrorMessage(response.data.message);
  //         setTimeout(() => {
  //           setError(false);
  //         }, 5000);
  //       }
  //       if (response.data.success) {
  //         setUserToVerified(response.data.user);
  //         setVerifiedVisible(true);
  //         const { id } = response.data.user;

  //         const result = await client.put(
  //           `user/${id}`,
  //           {
  //             roles: "jumpCourse2024",
  //           },
  //           { new: true }
  //         );
  //         setLoginPending(false);
  //       }
  //       setLoginPending(false);
  //       setUserName("");
  //       setEmail("");
  //       setPassword("");
  //       setConfirmPassword("");
  //     } else {
  //       setLoginPending(false);
  //       setError(true);
  //       setUserName("");
  //       setEmail("");
  //       setPassword("");
  //       setConfirmPassword("");
  //       setErrorMessage("Email o password incorrectos");
  //       setTimeout(() => {
  //         setErrorMessage(false);
  //       }, 5000);
  //     }
  //     setLoginPending(false);
  //   } catch (error) {
  //     setLoginPending(false);
  //     console.log(error);
  //   }
  // };
  // const handleVerification = async (e) => {
  //   e.preventDefault();

  //   setLoginPending(true);

  //   try {
  //     const response = await client.post("/verify-email", {
  //       userId: userToVerified.id,
  //       otp: verificationNumber,
  //     });

  //     if (response.data.success) {
  //       const result = await client.put(
  //         `user/${userToVerified.id}`,
  //         {
  //           verified: true,
  //         },
  //         { new: true }
  //       );

  //       if (result.data.success) {
  //         setLoginPending(false);
  //         setSuccessVerification(true);
  //         setTimeout(() => {
  //           SuccessVerification(false);
  //           navigate("/");
  //         }, 6000);
  //       } else {
  //         setLoginPending(false);
  //         alert("tu verificación no pudo realizarse");
  //       }
  //     }

  //     if (!response.data.success) {
  //       setError(true);
  //       setErrorMessage(
  //         "El código de 4 dígitos no es válido, vuelva a intentarlo"
  //       );
  //     }
  //   } catch (error) {
  //     setLoginPending(false);
  //     console.log(error);
  //     setError(true);
  //     setErrorMessage(error.response.data.message);
  //     setTimeout(() => {
  //       setVerificationNumber("");
  //       setError(false);
  //       setErrorMessage("");
  //     }, 5000);
  //   }
  // };

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    reset();
  });

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
                      <form onSubmit={onSubmit}>
                        <div className="relative mb-4">
                          <label
                            htmlFor="userName"
                            className="leading-7 text-sm text-gray-600"
                          >
                            User name
                          </label>
                          <input
                            type="text"
                            name="userName"
                            id="userName"
                            {...register("userName", {
                              required: {
                                value: true,
                                message: "El nombre de usuario es requerido",
                              },
                              minLength: {
                                value: 3,
                                message:
                                  "El nombre de usuario debe tener 3 caracteres mínimo",
                              },
                              maxLength: {
                                value: 30,
                                message:
                                  "El nombre de usuario debe tener 30 caracteres máximo",
                              },
                            })}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                          {errors.userName?.type === "required" && (
                            <p className="text-sm text-red-600 mt-3">
                              {errors.userName?.message}
                            </p>
                          )}
                          {errors.userName?.type === "maxLength" && (
                            <p className="text-sm text-red-600 mt-3">
                              {errors.userName?.message}
                            </p>
                          )}
                          {errors.userName?.type === "minLength" && (
                            <p className="text-xs text-red-600 mt-3">
                              {errors.userName?.message}
                            </p>
                          )}
                        </div>
                        <div className="relative mb-4">
                          <label
                            htmlFor="email"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            {...register("email", {
                              required: {
                                value: true,
                                message: "El email es requerido",
                              },
                              pattern: {
                                value:
                                  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message: "El formato del email no es correcto",
                              },
                            })}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                          {errors.email && (
                            <p className="text-sm text-red-600 mt-3">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                        <div className="relative mb-4">
                          <label
                            htmlFor="password"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Password
                          </label>
                          <input
                            type=""
                            id="password"
                            name="password"
                            {...register("password", {
                              required: {
                                value: true,
                                message: "La contraseña es requerida",
                              },
                              minLength: {
                                value: 8,
                                message:
                                  "La contraseña debe tener 8 caracteres",
                              },
                              maxLength: {
                                value: 8,
                                message:
                                  "La contraseña debe tener 8 caracteres",
                              },
                            })}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                          {errors.password && (
                            <p className="text-sm text-red-600 mt-3">
                              {errors.password?.message}
                            </p>
                          )}
                        </div>
                        <div className="relative mb-4">
                          <label
                            htmlFor="repeatPassword"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Confirm Password
                          </label>
                          <input
                            name="confirmPassword"
                            id="confirmPassword"
                            {...register("confirmPassword", {
                              required: {
                                value: true,
                                message:
                                  "La confirmación de la contraseña es requerida",
                              },
                              minLength: {
                                value: 8,
                                message:
                                  "La contraseña debe tener 8 caracteres",
                              },
                              maxLength: {
                                value: 8,
                                message:
                                  "La contraseña debe tener 8 caracteres",
                              },
                              validate: (value) => {
                                console.log(password.current);
                                return (
                                  value === password.current ||
                                  "Las contraseñas deben ser iguales"
                                );
                              },
                            })}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                          {errors.confirmPassword && (
                            <p className="text-sm text-red-600 mt-3">
                              {errors.confirmPassword?.message}
                            </p>
                          )}
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

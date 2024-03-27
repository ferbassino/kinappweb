import { Link } from "react-router-dom";
import { SiReadthedocs } from "react-icons/si";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaChartLine } from "react-icons/fa6";
import { useLogin } from "../../context/LoginProvider";
import { useNavigate } from "react-router-dom";
import client from "../../api/client";
import { useState } from "react";
import SuccessUnsuscribed from "../../components/logins/SuccessUnsuscribed";
import HashLoader from "react-spinners/HashLoader";
const UserJC24Profile = () => {
  const [succesfullyUnsuscribed, setSuccesfullyUnsuscribed] = useState(false);
  const navigate = useNavigate();
  const { profile, setProfile } = useLogin();

  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleUnSuscribe = async () => {
    try {
      setLoading(true);
      const response = await client.delete(`/api/user/${profile.id}`);
      if (response.data.success) {
        setTimeout(() => {
          setLoading(false);
          setProfile({});
          window.localStorage.removeItem("user");
          navigate("/");
        }, [6000]);
      } else {
        setLoading(false);
        alert("error has ocurred, try again later ");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      {loading ? (
        <>
          <HashLoader
            color={"#011a42"}
            loading={loading}
            cssOverride={{
              display: "block",
              margin: "0 auto",
              borderColor: "#011a42",
            }}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        <>
          {succesfullyUnsuscribed ? (
            <>
              <SuccessUnsuscribed />
            </>
          ) : (
            <>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="sm:text-3xl text-lg text-blue-900 tracking-widest font-medium title-font mb-1">
                      Bienvenido al curso
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue-900">
                      Análisis biomecanico del salto vertical
                    </h1>
                  </div>
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-900 text-white flex-shrink-0">
                            <SiReadthedocs />
                          </div>
                          <h2 className="text-gray-900 text-lg title-font font-medium">
                            Programa
                          </h2>
                        </div>
                        <div className="flex-grow">
                          <p className="leading-relaxed text-base">
                            Consulta el cronograma de actividade y el programa
                            del curso
                          </p>
                          <Link
                            to="/jump_program"
                            onClick={scrollToTop}
                            className="mt-3 text-blue-900 inline-flex items-center"
                          >
                            ver mas
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3 ">
                      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-900 text-white flex-shrink-0">
                            <LiaChalkboardTeacherSolid />
                          </div>
                          <h2 className="text-gray-900 text-lg title-font font-medium">
                            Tus clases
                          </h2>
                        </div>
                        <div className="flex-grow">
                          <p className="leading-relaxed text-base">
                            Ingresa para ver tus clases
                          </p>
                          <Link
                            to={"/jump_clases"}
                            onClick={scrollToTop}
                            className="mt-3 text-blue-900 inline-flex items-center"
                          >
                            ver mas
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-900 text-white flex-shrink-0">
                            <FaChartLine />
                          </div>
                          <h2 className="text-gray-900 text-lg title-font font-medium">
                            Análisis
                          </h2>
                        </div>
                        <div className="flex-grow">
                          <p className="leading-relaxed text-base">
                            Analizador del salto vertical
                          </p>
                          <Link
                            to="/jump_analysis"
                            onClick={scrollToTop}
                            className="mt-3 text-blue-900 inline-flex items-center"
                          >
                            ver mas
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                          <h2
                            onClick={handleUnSuscribe}
                            className="text-blue-900 text-lg title-font font-medium cursor-pointer"
                          >
                            Baja
                          </h2>
                        </div>
                        <div className="flex-grow">
                          <p className="leading-relaxed text-base">
                            Darse de baja del curso
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserJC24Profile;

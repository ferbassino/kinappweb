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
import JumpCourse2024Items from "../../components/jumpCourse/JumpCourse2024Items";
JumpCourse2024Items;

const UserJC24Profile = () => {
  const readerOptions = [
    "Clases",
    "Tus Análisis",
    "Video análisis",
    "Recursos kinApp",
    "Programa",
    "Docs",
  ];
  const [succesfullyUnsuscribed, setSuccesfullyUnsuscribed] = useState(false);
  const navigate = useNavigate();
  const { profile, setProfile } = useLogin();

  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 60, left: 0, behavior: "smooth" });
  };
  scrollToTop();

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
                  <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                      Hola {profile.userName}, este es tu panel del curso
                      "Análisis biomecánico del salto vertical"
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                      Elegí una opción:
                    </p>
                  </div>
                  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {readerOptions.map((item) => (
                      <JumpCourse2024Items key={item} title={item} />
                    ))}
                  </div>
                  <div className="p-4 md:w-1/3 mt-20">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                      <div className="flex items-center mt-103">
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
              </section>
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserJC24Profile;

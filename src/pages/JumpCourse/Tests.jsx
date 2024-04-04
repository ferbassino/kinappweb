import React, { useState, useEffect } from "react";
import { useLogin } from "../../context/LoginProvider";
import { getTests } from "../../requests/tests/getTests";
import getDate from "../../auxiliaries/getDate";
import HashLoader from "react-spinners/HashLoader";
import JumpVideoView from "../../components/views/JumpVideoView";
import ArtroView from "../../components/views/ArtroView";
import JumpView from "../../components/views/JumpView";
import StiffnessView from "../../components/views/StiffnessView";

const Tests = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();
  const { profile } = useLogin();
  const [allUserTests, setAllUserTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [testVisibles, setTestVisibles] = useState(true);
  const [jumpVideoVisible, setJumpVideoVisible] = useState(false);
  const [jumpVisible, setJumpVisible] = useState(false);
  const [stiffnessVisible, setStiffnessVisible] = useState(false);
  const [artroVisible, setArtroVisible] = useState(false);
  const [test, setTest] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      const getAllUserTests = async () => {
        // const allUT = await getTests(profile.id);
        const allUT = [];
        setTimeout(() => {
          if (allUT.length === 0) {
            setTestVisibles(false);
            setLoading(false);
          } else {
            setAllUserTests(allUT);
            setLoading(false);
          }
        }, 5000);
      };
      getAllUserTests();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);
  const handleTest = (test) => {
    switch (test.motionType) {
      case "kinoveaJump":
        setJumpVideoVisible(true);
        break;
      case "jump":
        setJumpVisible(true);
        break;
      case "artro":
        setArtroVisible(true);
        break;
      case "stiffness":
        setStiffnessVisible(true);
        break;

      default:
    }

    setTestVisibles(false);
    setTest(test);
  };
  const testsVisible = () => {
    setTestVisibles(true);
    setJumpVideoVisible(false);
    setJumpVisible(false);
    setArtroVisible(false);
    setStiffnessVisible(false);
  };
  return (
    <>
      {testVisibles ? (
        <section className="text-gray-600 body-font">
          <div className="container  pt-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                Tus evaluaciones
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Aquí se listan todas tus evaluaciones. Haciendo click en
                cualquiera de ellas vas a poder acceder a todas sus propiedades.
              </p>
            </div>
            {loading ? (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                  }}
                >
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
                </div>
              </>
            ) : (
              <>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                  <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                          Email
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Test
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Segmento
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Movimiento
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Fecha
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUserTests.map((test) => (
                        <tr
                          onClick={() => handleTest(test)}
                          key={test._id}
                          className="cursor-pointer hover:bg-blue-900 hover:text-blue-50"
                        >
                          <td className="px-4 py-3">{test.email}</td>
                          <td className="px-4 py-3">{test.motionType}</td>
                          <td className="px-4 py-3">{test.segment}</td>
                          <td className="px-4 py-3 ">{test.motionType}</td>
                          <td className="w-10 text-center">
                            {getDate(test.date)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </section>
      ) : (
        <div className="container  pt-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">
              Todavía no se registraron evaluaciones en tu perfil
            </h1>
          </div>
        </div>
      )}

      <>
        {jumpVisible ? (
          <JumpView test={test} testsVisible={testsVisible} />
        ) : null}
      </>
      <>
        {jumpVideoVisible ? (
          <JumpVideoView testId={test._id} testsVisible={testsVisible} />
        ) : null}
      </>
      <>
        {artroVisible ? (
          <ArtroView testId={test} testsVisible={testsVisible} />
        ) : null}
      </>
      <>
        {stiffnessVisible ? (
          <StiffnessView test={test} testsVisible={testsVisible} />
        ) : null}
      </>
    </>
  );
};

export default Tests;

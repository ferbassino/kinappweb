import React from "react";
import { getTest } from "../../requests/tests/getTest";
import { useEffect } from "react";
import { useState } from "react";
import jumpVideoCSVAnalysis from "../../auxiliaries/videoJumpAnalysis.jsx/jumpVideoCSVAnalysis";
import Chart from "../otros/Chart";
import Message from "../general/Message";
import HashLoader from "react-spinners/HashLoader";
const JumpView = ({ testId, testsVisibles }) => {
  const [currentTest, setCurrentTest] = useState([]);
  const [kneeAngleArray, setKneeAngleArray] = useState([]);
  const [ankleAngleArray, setAnkleAngleArray] = useState([]);
  const [verticalTimeArray, setVerticalTimeArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();
  useEffect(() => {
    try {
      const getCurrentTest = async () => {
        setLoading(true);
        const test = await getTest(testId);
        if (test.kinoveaData.lenght === 0) {
          console.log("error");
        } else {
          setCurrentTest(test);
          const { kneeAngleArr, ankleAngleArr, verticalTimeArr } =
            jumpVideoCSVAnalysis(test.kinoveaData[0], test.kinoveaData[1]);
          setKneeAngleArray(kneeAngleArr);
          setAnkleAngleArray(ankleAngleArr);
          setVerticalTimeArray(verticalTimeArr);
          setLoading(false);
        }
      };
      getCurrentTest();
    } catch (error) {
      console.log("ocurrió un error");
      console.log(error);
      setLoading(false);
    }
  }, []);
  return (
    <div>
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
          {messageVisible ? (
            <>
              <Message title={title} error={error} subTitle={subTitle} />
            </>
          ) : (
            <>
              <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                  <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                      {currentTest.email}
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                      Banh mi cornhole echo park skateboard authentic crucifix
                      neutra tilde lyft biodiesel artisan direct trade
                      mumblecore 3 wolf moon twee
                    </p>
                  </div>
                  <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                            Altura
                          </th>
                          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                            {currentTest.size} cm
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-3">Peso</td>
                          <td className="px-4 py-3">{currentTest.weight} kg</td>
                        </tr>
                        <tr>
                          <td className="border-t-2 border-gray-200 px-4 py-3">
                            Género
                          </td>
                          <td className="border-t-2 border-gray-200 px-4 py-3">
                            {currentTest.gender}
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t-2 border-gray-200 px-4 py-3">
                            Frecuencia:
                          </td>
                          <td className="border-t-2 border-gray-200 px-4 py-3">
                            {currentTest.pALevel}
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                            Cualidad
                          </td>
                          <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                            {currentTest.mFComponents}
                          </td>
                        </tr>
                        <tr>
                          <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                            Actividad
                          </td>
                          <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                            {currentTest.mPActivity}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                  <Chart
                    x={kneeAngleArray}
                    xName="Angulo de rodilla"
                    xColor="red"
                    y={ankleAngleArray}
                    yName="Angulo de tobillo"
                    yColor="blue"
                    // z={verticalWristArray}
                    // zName="Wrist"
                    // zColor="green"
                    t={verticalTimeArray}
                  />
                  <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      Knausgaard typewriter readymade marfa
                    </h1>
                    <p className="mb-8 leading-relaxed">
                      Kickstarter biodiesel roof party wayfarers cold-pressed.
                      Palo santo live-edge tumeric scenester copper mug
                      flexitarian. Prism vice offal plaid everyday carry.
                      Gluten-free chia VHS squid listicle artisan.
                    </p>
                    <div className="flex w-full justify-center items-end">
                      <button
                        onClick={testsVisibles}
                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Evaluaciones
                      </button>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                      Neutra shabby chic ramps, viral fixie.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default JumpView;

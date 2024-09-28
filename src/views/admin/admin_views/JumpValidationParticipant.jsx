import React, { useState, useEffect, useContext } from "react";
import getDate, { getTime } from "../../../auxiliaries/general/getDate";
import { testsContext } from "../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import "./Tests.css";
import accelerationArrays from "../../../auxiliaries/basics/accelerationArrays";
import { getJumpValidationClients } from "../../../services/clientServices";
import { getTestsByIds } from "../../../services/testsServices";
import jumpProcess from "../../../auxiliaries/jumpAnalysis/cMJump/jumpProcess";

const JumpValidationParticipant = () => {
  const navigate = useNavigate();
  const {
    user,
    tests,
    handleCurrentTest,
    handleCurrentTests,
    currentTest,
    currentClient,
    handleCurrentClientJumpNumber,
    handleTestsToSpreadSheet,
    handleTestsToSpreadSheetM,
  } = useContext(testsContext);

  const [currentTests, setCurrenTests] = useState([]);
  const [testVisibles, setTestVisibles] = useState(true);
  const [noTestsVisible, setNoTestsVisible] = useState(false);
  const [jumpValidationClients, setJumpValidationClients] = useState([]);

  const filterObjectProperties = (object, requiredProperties) => {
    return Object.fromEntries(
      Object.entries(object).filter(([key]) => requiredProperties.includes(key))
    );
  };

  const getDataToSpreadSheet = (allClientTests) => {
    const currentDataToSpreadSheet = [];
    const currentDataToSpreadSheetM = [];
    allClientTests.map((el) => {
      const { accY } = accelerationArrays(el.accData, el.testTime);
      currentDataToSpreadSheet.push(jumpProcess(accY, el.testTime, el.weight));
      currentDataToSpreadSheetM.push(jumpProcess(accY, el.testTime, el.weight));
    });

    const dataToSpreadSheet = [];
    const requiredProperties = [
      "tV",
      "alturaVuelo",
      "velD",
      "cMjumpInterv",
      "power",
      "fRM",
      "propulsiveTime",
      "propulsiveDistance",
      "rSI",
    ];
    currentDataToSpreadSheet.map((el) => {
      dataToSpreadSheet.push(filterObjectProperties(el, requiredProperties));
    });

    function addIndexToObjects(arr) {
      return arr.map((item, index) => ({
        index: index + 1,
        ...item,
      }));
    }

    const result = addIndexToObjects(dataToSpreadSheet);

    handleTestsToSpreadSheet(result);

    return dataToSpreadSheet;
  };

  useEffect(() => {
    try {
      const getJumpsById = async () => {
        const allClientTests = await getTestsByIds(currentClient.motion);

        getDataToSpreadSheet(allClientTests);
        setCurrenTests(allClientTests);
        handleCurrentTests(allClientTests);
      };
      getJumpsById();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleTest = (test, index) => {
    handleCurrentClientJumpNumber(index + 1);

    handleCurrentTest(test);
    navigate("/jump_validationParticipantTest");
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      {testVisibles ? (
        <section className="">
          <div className="test-title-container">
            <h1 className="tests-title">Saltos de {currentClient.email}</h1>
          </div>

          <>
            <div className="contenedor-tabla">
              <table className="tabla-tests">
                <thead className="caption-tests">
                  <tr>
                    <th className="th-tests">#</th>
                    <th className="th-tests">email</th>
                    <th className="th-tests">Tests</th>
                    <th className="th-tests">Fecha</th>
                    <th className="th-tests">Hora</th>
                  </tr>
                </thead>
                <tbody className="tbody-tests">
                  {currentTests.map((test, index) => (
                    <tr
                      onClick={() => handleTest(test, index)}
                      key={test._id}
                      className=""
                    >
                      <td className="td-tests">{index + 1}</td>
                      <td className="td-tests">{test.email}</td>
                      <td className="td-tests">{test.motionType}</td>
                      <td className="td-tests">{getDate(test.date)}</td>
                      <td className="td-tests">{getTime(test.date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={() => navigate("/jump_validationSpreadSheet")}>
              ir a planilla
            </button>
          </>
        </section>
      ) : null}
      {noTestsVisible ? (
        <>
          <div className="">
            <div className="">
              <h1 className="">
                Todavía no se registraron evaluaciones en tu perfil
              </h1>
            </div>
          </div>
        </>
      ) : null}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default JumpValidationParticipant;

import React, { useState, useEffect, useContext } from "react";
import getDate from "../../../auxiliaries/general/getDate";
import { testsContext } from "../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import "./Tests.css";
import accelerationArrays from "../../../auxiliaries/basics/accelerationArrays";

const Tests = () => {
  const navigate = useNavigate();
  const { user, tests, handleCurrentTest, currentTest } =
    useContext(testsContext);

  const [tests, setTests] = useState([]);
  const [testVisibles, setTestVisibles] = useState(true);
  const [noTestsVisible, setNoTestsVisible] = useState(false);

  useEffect(() => {
    setTests(tests);
  }, []);

  const handleCurrentLocalTest = (test) => {
    const { accX, accY, accZ, arrayAccTime } = accelerationArrays(
      test.accData,
      test.testTime
    );
    const dataObject = {
      accY: accY,
      testTime: test.testTime,
      weight: test.weight,
      motionType: test.motionType,
    };

    handleCurrentTest(dataObject);
  };

  useEffect(() => {
    if (
      currentTest.motionType === "squat jump" ||
      currentTest.motionType === "counter movement jump" ||
      currentTest.motionType === "drop jump" ||
      currentTest.motionType === "stiffness" ||
      currentTest.motionType === "free"
    ) {
      navigate("/jump_view");
    }

    if (currentTest.motionType === "artro") {
      navigate("/jump_view");
    }
  }, [currentTest]);

  const handleHome = () => {
    navigate("/reader_profile");
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      {testVisibles ? (
        <section className="">
          <div className="test-title-container">
            <h1 className="tests-title">Tus evaluaciones</h1>
            <p className="tests-subtitle">
              Aquí se listan todas tus evaluaciones. Haciendo click en
              cualquiera de ellas vas a poder acceder a todas sus propiedades.
            </p>
          </div>

          <>
            <div className="contenedor-tabla">
              <table className="tabla-tests">
                <thead className="caption-tests">
                  <tr>
                    <th className="th-tests">Email</th>
                    <th className="th-tests">Test</th>
                    <th className="th-tests">Fecha</th>
                  </tr>
                </thead>
                <tbody className="tbody-tests">
                  {tests.map((test) => (
                    <tr
                      onClick={() => handleCurrentLocalTest(test)}
                      key={test._id}
                      className=""
                    >
                      <td className="td-tests">{test.email}</td>
                      <td className="td-tests">{test.motionType}</td>
                      <td className="td-tests">{getDate(test.date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

export default Tests;

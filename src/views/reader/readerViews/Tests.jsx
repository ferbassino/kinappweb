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
  const { user, tests, handleCurrentTest, currentTest, handleTest } =
    useContext(testsContext);

  const [userTests, setUserTests] = useState([]);
  const [testVisibles, setTestVisibles] = useState(true);
  const [noTestsVisible, setNoTestsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [activeTab, setActiveTab] = useState("todos");
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [disabledButtonPagination, setDisabledButtonPagination] =
    useState(false);

  useEffect(() => {
    if (user.roles === "admin") {
      const currentUserTests = tests;
      setCurrentItems(tests);

      // Calcular el índice inicial y final de los elementos a mostrar en la página actual
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      const current = currentUserTests.slice(indexOfFirstItem, indexOfLastItem);

      if (indexOfLastItem >= currentItems.length) {
        setDisabledButtonPagination(true);
      } else {
        setDisabledButtonPagination(false);
      }

      setUserTests(current);
    } else {
      const currentUserTests = tests.filter(
        (test) => test.userId[0] === user.id
      );
      setCurrentItems(currentUserTests);

      // Calcular el índice inicial y final de los elementos a mostrar en la página actual
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      const current = currentUserTests.slice(indexOfFirstItem, indexOfLastItem);

      if (indexOfLastItem >= currentItems.length) {
        setDisabledButtonPagination(true);
      } else {
        setDisabledButtonPagination(false);
      }

      setUserTests(current);
    }
  }, [user, tests, currentPage]);

  const handleCurrentLocalTest = (test) => {
    const { accX, accY, accZ, arrayAccTime } = accelerationArrays(
      test.accData,
      test.testTime
    );
    handleTest(test);

    const dataObject = {
      accY: accY,
      testTime: test.testTime,
      weight: test.weight,
      motionType: test.motionType,
    };

    handleCurrentTest(dataObject);
  };

  useEffect(() => {
    if (currentTest.length === "") {
      setTestVisibles(false);
    }
  }, []);
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

  // Función para cambiar la solapa activa
  const handleTabClick = (tabId) => {
    if (tabId === "todos") {
      setCurrentPage(1);
      const currentUserTests = tests.filter(
        (test) => test.userId[0] === user.id
      );

      // Calcular el índice inicial y final de los elementos a mostrar en la página actual
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      const current = currentUserTests.slice(indexOfFirstItem, indexOfLastItem);
      setUserTests(current);

      setActiveTab(tabId);
      if (indexOfLastItem >= currentUserTests.length) {
        setDisabledButtonPagination(true);
      } else {
        setDisabledButtonPagination(false);
      }
    } else {
      const currentUserTests = tests.filter(
        (test) => test.userId[0] === user.id
      );

      const current = currentUserTests.filter(
        (test) => test.motionType === tabId
      );
      setCurrentPage(1);
      setCurrentItems(current);

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      const curr = current.slice(indexOfFirstItem, indexOfLastItem);
      setUserTests(curr);
      setActiveTab(tabId);

      if (indexOfLastItem >= current.length) {
        setDisabledButtonPagination(true);
      } else {
        setDisabledButtonPagination(false);
      }
    }
  };

  // Cambiar de página
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => setCurrentPage(currentPage - 1);

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
              <div id="tabs-container">
                {/* Itera sobre cada solapa */}
                {[
                  "todos",
                  "free",
                  "squat jump",
                  "counter movement jump",
                  "drop jump",
                  "stiffness",
                ].map((tabId) => (
                  <div
                    key={tabId}
                    className={`tab ${activeTab === tabId ? "active" : ""}`}
                    onClick={() => handleTabClick(tabId)}
                  >
                    {tabId}
                  </div>
                ))}
              </div>
              <table className="tabla-tests">
                <thead className="caption-tests">
                  <tr>
                    <th className="th-tests">Email</th>
                    <th className="th-tests">Test</th>
                    <th className="th-tests">Fecha</th>
                  </tr>
                </thead>
                <tbody className="tbody-tests">
                  {userTests.map((test) => (
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
              <div className="prev-next-container">
                <button
                  className="next-prev-button"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  Anterior
                </button>
                <button
                  className="next-prev-button"
                  onClick={nextPage}
                  disabled={disabledButtonPagination}
                  // disabled={indexOfLastItem >= currentItems.length}
                >
                  Siguiente
                </button>
              </div>
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

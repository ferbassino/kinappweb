import React, { useState, useEffect, useContext } from "react";
import getDate from "../../../auxiliaries/general/getDate";
import { testsContext } from "../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import "./Tests.css";
import accelerationArrays from "../../../auxiliaries/basics/accelerationArrays";
import {
  getClientById,
  getJumpValidationClients,
} from "../../../services/clientServices";

const JumpValidation = () => {
  const navigate = useNavigate();
  const { handleCurrentClient } = useContext(testsContext);

  const [testVisibles, setTestVisibles] = useState(true);
  const [noTestsVisible, setNoTestsVisible] = useState(false);
  const [jumpValidationClients, setJumpValidationClients] = useState([]);

  const handleClient = (client) => {
    handleCurrentClient(client);
    navigate("/jump_validationParticipant");
  };

  useEffect(() => {
    const getJumpValidationData = async () => {
      const jumpValidClients = await getJumpValidationClients();

      setJumpValidationClients(jumpValidClients);
    };
    getJumpValidationData();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      {testVisibles ? (
        <section className="">
          <div className="test-title-container">
            <h1 className="tests-title">Saltos registrados</h1>
            <p className="tests-subtitle">
              Listado de participantes con la cantidad de evaluaciones y fecha
              de inicio. hacer clic sobre cada uno de ellos para acceder a los
              detalles.
            </p>
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
                  </tr>
                </thead>
                <tbody className="tbody-tests">
                  {jumpValidationClients.map((client, index) => (
                    <tr
                      onClick={() => handleClient(client)}
                      key={client._id}
                      className=""
                    >
                      <td className="td-tests">{index + 1}</td>
                      <td className="td-tests">{client.email}</td>
                      <td className="td-tests">{client.motion.length}</td>
                      <td className="td-tests">{getDate(client.date)}</td>
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

export default JumpValidation;

import React, { useState, useEffect, useContext } from "react";

import { testsContext } from "../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import "./Users.css";
import getDifferenceNowMonth from "../../../auxiliaries/basics/getDifferenceNowMonth";
import { getAllUsers, updateUser } from "../../../services/userServices";

const User = () => {
  const navigate = useNavigate();
  const { currentUser, handleUsers, handleCurrentUser } =
    useContext(testsContext);
  const { initialDate } = currentUser;

  const [diasQueRestan, setDiasQueRestan] = useState(0);

  const [visible, setVisible] = useState(true);
  console.log(currentUser);
  useEffect(() => {
    if (currentUser.roles === "editor" && currentUser.level === "cero") {
      const diasDesdeInicio = getDifferenceNowMonth(initialDate);
      let restan = 0;
      if (diasDesdeInicio < 30) {
        restan = 30 - diasDesdeInicio;
      }

      setDiasQueRestan(restan);
    }
  }, []);

  const handleRole = async () => {
    setVisible(false);
    let values = {};
    const id = currentUser._id;
    if (currentUser.roles === "editor") {
      values = {
        roles: "reader",
      };
    }
    if (currentUser.roles === "reader") {
      values = {
        roles: "editor",
      };
    }
    try {
      const res = await updateUser(id, values);
      if (res.success) {
        const data = await getAllUsers();
        handleUsers(data);
        const current = data.filter((user) => user._id === currentUser._id);
        handleCurrentUser(current);

        navigate("/admin_users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <section className="">
        {visible ? (
          <>
            <div className="test-title-container">
              <h1 className="tests-title">{currentUser.email}</h1>
              {/* <p className="tests-subtitle">
            Aquí se listan todas tus evaluaciones. Haciendo click en cualquiera
            de ellas vas a poder acceder a todas sus propiedades.
          </p> */}
            </div>

            <>
              <div className="contenedor-tabla">
                <table className="tabla-tests">
                  <thead className="caption-tests">
                    <tr>
                      <th className="th-tests">Propiedad</th>
                      <th className="th-tests">Valor</th>
                    </tr>
                  </thead>
                  <tbody className="tbody-tests">
                    <tr>
                      <td className="td-tests1">Rol</td>
                      <td className="td-tests">{currentUser.roles}</td>
                    </tr>
                    <tr>
                      <td className="td-tests1">Verified</td>
                      <td className="td-tests">
                        {currentUser.verified ? "true" : "false"}
                      </td>
                    </tr>
                    <tr>
                      <td className="td-tests1">Level</td>
                      <td className="td-tests">{currentUser.level}</td>
                    </tr>
                    <tr>
                      <td className="td-tests1">dias de prueba restantes</td>
                      {currentUser.roles === "editor" &&
                      currentUser.level == "uno" ? (
                        <td className="td-tests">No definido</td>
                      ) : null}
                      {currentUser.roles === "editor" &&
                      currentUser.level == "cero" ? (
                        <td className="td-tests">{diasQueRestan}</td>
                      ) : null}
                    </tr>
                    {/* <tr>
                  <td className="td-tests1">Clientes</td>
                  <td className="td-tests">{currentUser.client.length}</td>
                </tr>
                <tr>
                  <td className="td-tests1">Tests</td>
                  <td className="td-tests">{currentUser.motion.length}</td>
                </tr> */}
                  </tbody>
                </table>
                <button
                  className="user-button"
                  onClick={() => navigate("/admin_users")}
                >
                  Usuarios
                </button>
                <button className="user-button" onClick={handleRole}>
                  {currentUser.roles === "editor"
                    ? "Cambiar rol a reader"
                    : "Cambiar rol a editor"}
                </button>
              </div>
            </>
          </>
        ) : null}
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default User;

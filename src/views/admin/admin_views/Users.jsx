import React, { useState, useEffect, useContext } from "react";

import { testsContext } from "../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import "./Users.css";

const Users = () => {
  const navigate = useNavigate();
  const { users, currentUser, handleCurrentUser } = useContext(testsContext);

  const handleUser = (user) => {
    handleCurrentUser(user);
    navigate("/admin_user");
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <section className="">
        <div className="test-title-container">
          <h1 className="tests-title">Usuarios</h1>
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
                  <th className="th-tests">#</th>
                  <th className="th-tests">email</th>

                  <th className="th-tests">rol</th>
                </tr>
              </thead>
              <tbody className="tbody-tests">
                {users.map((user, index) => (
                  <tr
                    onClick={() => handleUser(user)}
                    key={user._id}
                    className="tr-user"
                  >
                    <td className="td-tests">{index + 1}</td>
                    <td className="td-tests">{user.email}</td>
                    <td className="td-tests">{user.roles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Users;

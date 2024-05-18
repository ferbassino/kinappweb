import React, { useContext } from "react";
import "./Statistics.css";
import { testsContext } from "../../../context/TestsContext";
const Statistics = () => {
  const { users, tests, downloadedJumpApp } = useContext(testsContext);
  return (
    <div className="statistics-container">
      <div className="caja-estadistica">
        <h1 className="estadistica-subTitle">{users.length}</h1>
        <h1 className="estadistica-title">Usuarios registrados</h1>
      </div>
      <div className="caja-estadistica">
        <h1 className="estadistica-subTitle">{tests.length}</h1>
        <h1 className="estadistica-title">Evaluaciones realizadas</h1>
      </div>
      <div className="caja-estadistica">
        <h1 className="estadistica-subTitle">{downloadedJumpApp}</h1>
        <h1 className="estadistica-title">Descargas jump.apk</h1>
      </div>
    </div>
  );
};

export default Statistics;

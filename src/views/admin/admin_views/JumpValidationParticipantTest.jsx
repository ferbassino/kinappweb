import React, { useState, useEffect, useContext } from "react";
import getDate from "../../../auxiliaries/general/getDate";
import { testsContext } from "../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import "./Tests.css";
import accelerationArrays from "../../../auxiliaries/basics/accelerationArrays";

import jumpProcess from "../../../auxiliaries/jumpAnalysis/cMJump/jumpProcess";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

import Chart from "../../../components/basics/Chart";

registerAllModules();
const convertObjectToTableData = (obj) => {
  // Convertir el objeto en un array de arrays para Handsontable
  return Object.entries(obj).map(([key, value]) => [key, value]);
};
const filterObjectProperties = (object, requiredProperties) => {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => requiredProperties.includes(key))
  );
};

const JumpValidationParticipant = () => {
  const navigate = useNavigate();
  const { handleCurrentTest, currentTest, currentClient, jumpClientNumber } =
    useContext(testsContext);
  const [jumpResultObject, setJumpResultObject] = useState({});
  const [jumpResultArray, setJumpResultArray] = useState([]);

  const { accX, accY, accZ, arrayAccTime } = accelerationArrays(
    currentTest.accData,
    currentTest.testTime
  );
  const result = jumpProcess(accY, currentTest.testTime, currentTest.weight);

  const requiredProperties = [
    "tV",
    "alturaVuelo",
    "velD",
    "cMjumpInterv",
    "power",
    "fRM",
    "propulsiveTime",
    "propulsiveDistance",
  ];

  const filteredObject = filterObjectProperties(result, requiredProperties);
  const tableData = convertObjectToTableData(filteredObject);
  const columnsConfig = [
    { data: 0, title: "Property" }, // Columna para las propiedades
    { data: 1, title: "Jump App" }, // Columna para los valores
  ];

  const dataObject = {
    accY: accY,
    testTime: currentTest.testTime,
    weight: currentTest.weight,
    motionType: currentTest.motionType,
  };

  const {
    arrayY0,
    accT,
    arrayY0F,
    arrayY0FLong,
    cMJXAxis,
    cMJXAxisLong,
    tV,
    alturaVuelo,
    velD,
    cMjumpInterv,
    power,
    fRM,
    propulsiveTime,
    propulsiveDistance,
    validation,
    arrayY4,
    arrayXAxis,
    rSI,
  } = jumpProcess(dataObject.accY, dataObject.testTime, dataObject.weight);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <section className="">
        <div className="test-title-container">
          <h1 className="tests-title">{currentClient.email}</h1>
          <h1 className="tests-title">Salto N° {jumpClientNumber}</h1>
          <p className="tests-title">Masa {currentTest.weight} kg</p>
        </div>
        <HotTable
          data={tableData} // Datos de la tabla
          colHeaders={["Property", "Value"]} // Encabezados de columna
          columns={columnsConfig} // Configuración de columnas
          rowHeaders={true} // Mostrar encabezados de fila
          width="600"
          height="300"
          licenseKey="non-commercial-and-evaluation" // Usa una clave de licencia adecuada
        />
      </section>
      <Chart x={cMJXAxis} y={arrayY0F} t={accT} />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default JumpValidationParticipant;

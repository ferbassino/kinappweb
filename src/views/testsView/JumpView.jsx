import React, { useState, useEffect, useContext } from "react";
import ChartOneAxis from "../../components/basics/ChartOneAxis";
import getDate from "../../auxiliaries/general/getDate";
import accelerationArrays from "../../auxiliaries/basics/accelerationArrays";
import freeJumpAnalysis from "../../auxiliaries/jumpAnalysis/freeJump/freeJumpanalysis";
import squatJumpAnalysis from "../../auxiliaries/jumpAnalysis/sJump/squatJumpAnalysis";
import dropJumpAnalysis from "../../auxiliaries/jumpAnalysis/dropJump/dropJumpAnalysis";
import jumpProcess from "../../auxiliaries/jumpAnalysis/cMJump/jumpProcess";
import stiffnessAnalysis from "../../auxiliaries/jumpAnalysis/stiffness/stiffnessAnalysis";
// import GeneralDataClientsView from "../../views/GeneralDataClientsView";
import { testsContext } from "../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import "./JumpView.css";
import Navbar from "../../components/landing/header/Navbar";
import Ploty from "../../components/basics/Ploty";

function JumpView() {
  const navigate = useNavigate();
  const { currentTest, handleCurrentTest, test } = useContext(testsContext);

  const [flightTime, setFlightTime] = useState(0);
  const [flightHeight, setFlightHeight] = useState(0);
  const [takeoffSpeed, setTakeoffSpeed] = useState(0);
  const [arrayX0F, setArrayXF] = useState([]);
  const [arrayY0F, setArrayYF] = useState([]);
  const [arrayZ0F, setArrayZF] = useState([]);
  const [arrayT0F, setArrayT0F] = useState([]);
  const [xAxisArray, setXAxisArray] = useState([]);
  const [interval, setInterval] = useState(0);

  const [propTime, setPropTime] = useState("");
  const [propDist, setPropDist] = useState("");
  const [power, setPower] = useState(0);
  const [powerS, setPowerS] = useState(0);
  const [force, setForce] = useState(0);
  const [rSI, setRSI] = useState(0);
  const [forceW, setForceW] = useState(0);
  const [powerW, setPowerW] = useState(0);
  const [fTcT, setFTcT] = useState(0);

  // const { accX, accY, accZ, arrayAccTime } = accelerationArrays(
  //   currentTest.accData,
  //   currentTest.testTime
  // );

  const { accX, accY, accZ } = currentTest;
  useEffect(() => {
    const {
      arrayY0F,
      accT,
      cMJXAxis,
      tV,
      alturaVuelo,
      velD,
      cMjumpInterv,
      power,
      fRM,
      propulsiveTime,
      propulsiveDistance,
      arrayX0F,
      arrayZ0F,
      rSI,
      forceWeight,
      powerWeight,
      flightTimeContactTime,
    } = jumpProcess(accY, currentTest.testTime, currentTest.weight, accX, accZ);
    setArrayXF(arrayX0F);
    setArrayYF(arrayY0F);
    setArrayZF(arrayZ0F);
    setFlightTime(tV);
    setFlightHeight(alturaVuelo);
    setTakeoffSpeed(velD);
    setInterval(cMjumpInterv);
    setArrayT0F(accT);
    setPropTime(propulsiveTime);
    setPropDist(propulsiveDistance);
    setPower(power);
    setForce(fRM);
    setXAxisArray(cMJXAxis);
    setRSI(rSI);
    setForceW(forceWeight);
    setPowerW(powerWeight);
    setFTcT(flightTimeContactTime);
  }, []);

  const handleTests = () => {
    handleCurrentTest({});
    navigate("/tests");
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="jump-test-container">
        <div className="jump-title-container">
          <h1 className="jump-title">Análisis del salto</h1>

          <h3 className="jump-jump">{currentTest.motionType}</h3>

          <>
            <h3 className="jump-ref">Ref: {currentTest.email}</h3>
            <h3 className="jump-date">Fecha: {currentTest.date}</h3>
          </>

          <h3 className="jump-masa">masa: {currentTest.weight} kg</h3>
        </div>
        <div className="contenedor-tabla">
          <table className="">
            <thead>
              <tr>
                <th className="">Datos de evaluación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">Tiempo de evaluación</td>
                <td className="">{currentTest.testTime / 1000}s</td>
              </tr>
              <tr>
                <td className="">Intervalo de muestreo</td>
                <td className="">{interval.toFixed(3)}s</td>
              </tr>
            </tbody>
          </table>
          <table className="">
            <thead>
              <tr>
                <th className="">Fase propulsiva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="3">Tiempo propulsivo</td>
                <td className="">{propTime} s</td>
              </tr>
              <tr>
                <td className="">Distancia Propulsiva</td>
                <td className="">{propDist}m</td>
              </tr>
              <tr>
                <td className="">Fuerza media propulsiva</td>
                <td className="">{force} N</td>
              </tr>
              <tr>
                <td className="">Fuerza / masa corporal</td>
                <td className="">{parseInt(forceW)} N/kg</td>
              </tr>
              <tr>
                <td className="">Potencia media propulsiva</td>
                <td className="">{power} W</td>
              </tr>
              <tr>
                <td className="">Potencia / masa corporal</td>
                <td className="">{parseInt(powerW)} W/kg</td>
              </tr>
            </tbody>
          </table>
          <table className="">
            <thead>
              <tr>
                <th className="">Fase de vuelo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">Velocidad de despegue</td>
                <td className="">{takeoffSpeed.toFixed(3)} m/s</td>
              </tr>
              <tr>
                <td className="">Tiempo de vuelo</td>
                <td className="">{flightTime.toFixed(3)} s</td>
              </tr>
              <tr>
                <td className="">Altura de vuelo</td>
                <td className="">{flightHeight.toFixed(3)} m</td>
              </tr>
              <tr>
                <td className="">Reactive strength index modified</td>
                <td className="">{rSI.toFixed(3)} m/s</td>
              </tr>
            </tbody>
          </table>
          <table className="">
            <thead>
              <tr>
                <th className="">Índices</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">Reactive strength index modified</td>
                <td className="">{rSI.toFixed(3)} m/s</td>
              </tr>
              <tr>
                <td className="">tiempo de vuelo / tiempo de contacto</td>
                <td className="">{fTcT.toFixed(3)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* ---------------------------------- */}
      </section>

      <div className="chart-jump">
        <ChartOneAxis
          x={arrayY0F}
          xName="aceleración en y"
          xColor="red"
          y={xAxisArray}
          yName="x axis"
          yColor="black"
          t={arrayT0F}
        />
      </div>
      <button onClick={() => handleTests()} className="volver">
        Ir a evaluaciones
      </button>
    </div>
  );
}

export default JumpView;

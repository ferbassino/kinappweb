import React, { useState, useEffect, useContext } from "react";
import Chart from "../../components/basics/Chart";
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

function JumpView() {
  const navigate = useNavigate();
  const { currentTest, handleCurrentTest, test } = useContext(testsContext);

  const [validationError, setValidationError] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState("");
  const [freeJumpVisible, setFreeJumpVisible] = useState(false);
  const [squatJumpVisible, setSquatJumpVisible] = useState(false);
  const [dropJumpVisible, setDropJumpVisible] = useState(false);
  const [cMJumpVisible, setCMJumpVisible] = useState(false);
  const [stiffnessVisible, setStiffnessVisible] = useState(false);
  const [flightTime, setFlightTime] = useState(0);
  const [flightHeight, setFlightHeight] = useState(0);
  const [takeoffSpeed, setTakeoffSpeed] = useState(0);
  const [arrayY0F, setArrayYF] = useState([]);
  const [arrayT0F, setArrayT0F] = useState([]);
  const [xAxisArray, setXAxisArray] = useState([]);
  const [interval, setInterval] = useState(0);
  const [dropSpeed, setDropSpeed] = useState(0);
  const [contactTime, setContactTime] = useState(0);
  const [flightTime2, setFlightTime2] = useState(0);
  const [flightHeight2, setFlightHeight2] = useState(0);
  const [takeoffSpeed2, setTakeoffSpeed2] = useState(0);
  const [stiffnessData, setStiffnessData] = useState({});
  // const [weight, setWeight] = useState("");
  const [propTime, setPropTime] = useState("");
  const [propDist, setPropDist] = useState("");
  const [power, setPower] = useState(0);
  const [powerS, setPowerS] = useState(0);
  const [force, setForce] = useState(0);

  // const { accX, accY, accZ, arrayAccTime } = accelerationArrays(
  //   currentTest.accData,
  //   currentTest.testTime
  // );

  const accY = currentTest.accY;
  useEffect(() => {
    // setWeight(weight);
    switch (currentTest.motionType) {
      case "free":
        const { freeArrayY1, freeXAxis, arrTf, interval } = freeJumpAnalysis(
          accY,
          currentTest.testTime,
          currentTest.weight
        );
        setArrayYF(freeArrayY1);
        setXAxisArray(freeXAxis);
        setArrayT0F(arrTf);
        setInterval(interval);
        break;
      case "squat jump":
        const { sJDataObj } = squatJumpAnalysis(
          accY,
          currentTest.testTime,
          currentTest.weight
        );
        setPropTime(sJDataObj.propulsiveTimeSJ);
        setPropDist(sJDataObj.propulsiveDistanceSJ);
        setPower(sJDataObj.powerSJ);
        setPowerS(sJDataObj.power2);
        setForce(sJDataObj.fRMSJ);
        setArrayYF(sJDataObj.sJAccYFinal);
        setArrayT0F(sJDataObj.accT);
        // setXAxisArray(sJDataObj.xAxis);
        setSquatJumpVisible(true);
        setFlightTime(sJDataObj.flightTime);
        setFlightHeight(sJDataObj.flightHeight);
        setTakeoffSpeed(sJDataObj.takeoffSpeed);
        setInterval(sJDataObj.sJInterval);
        setSquatJumpVisible(true);

        break;
      case "counter movement jump":
        const {
          arrayY0,
          arrayY0F,
          accT,
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
        } = jumpProcess(accY, currentTest.testTime, currentTest.weight);
        setArrayYF(arrayY0F);
        // setXAxisArray(cMJXAxis);
        setCMJumpVisible(true);
        setFlightTime(tV);
        setFlightHeight(alturaVuelo);
        setTakeoffSpeed(velD);
        setInterval(cMjumpInterv);
        setArrayT0F(accT);
        setPropTime(propulsiveTime);
        setPropDist(propulsiveDistance);
        setPower(power);
        setForce(fRM);
        break;
      case "drop jump":
        const { dJDataObject } = dropJumpAnalysis(
          accY,
          currentTest.testTime,
          currentTest.weight
        );
        setArrayYF(dJDataObject.dropJumpAccY0F);
        // setXAxisArray(dropJumpXAxis);
        setDropJumpVisible(true);
        setFlightTime(dJDataObject.flightTime1);
        setFlightHeight(dJDataObject.flightHeight1);
        setTakeoffSpeed(dJDataObject.dropSpeed);
        setInterval(dJDataObject.interv);
        setDropSpeed(dJDataObject.dropSpeed);
        setContactTime(dJDataObject.contactTime);
        setFlightHeight2(dJDataObject.flightHeight2);
        setFlightTime2(dJDataObject.flightTime2);
        setTakeoffSpeed2(dJDataObject.takeoffSpeed2);
        setArrayT0F(dJDataObject.arrTF);
        setPower(dJDataObject.powerDJ);
        setForce(dJDataObject.fRMDJ);
        setPropTime(dJDataObject.propulsiveTimeDJ);
        setPropDist(dJDataObject.propulsiveDistanceDJ);
        break;
      case "stiffness":
        const {
          stiffnessData,
          arrayYCentral,
          arrayYCentral0F,
          stiffnessXAxis,
          arrayYCentral0,
          arrayAccTime,
          indexValidation,
          stiffnessInterval,
          arrTCentral0F,
        } = stiffnessAnalysis(accY, currentTest.testTime, currentTest.weight);
        setArrayYF(arrayYCentral0F);
        setXAxisArray(stiffnessXAxis);
        setStiffnessData(stiffnessData);
        setStiffnessVisible(true);
        setInterval(stiffnessInterval);
        setArrayT0F(arrTCentral0F);
        break;
    }
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
      <section className="">
        <div className="">
          <div className="jump-title-container">
            <h1 className="jump-title">Análisis del salto</h1>
            {/* <h2 className="jump-subtitle">subtitle</h2> */}
            <h3 className="jump-jump">{currentTest.motionType}</h3>
            {currentTest === "undefined" ? (
              <>
                <h3 className="jump-ref">Ref:{currentTest.email}</h3>
                <h3 className="jump-date">Fecha:{currentTest.date}</h3>
              </>
            ) : (
              <>
                <h3 className="jump-ref">Ref:{test.email}</h3>
                <h3 className="jump-date">Fecha:{getDate(test.date)}</h3>
              </>
            )}

            <h3 className="jump-masa">masa:{currentTest.weight} kg</h3>
          </div>
          <div className="contenedor-tabla">
            <table className="">
              <thead>
                <tr>
                  <th className="">Analisis</th>
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
                {squatJumpVisible || cMJumpVisible ? (
                  <>
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
                      <td className="">Potencia media propulsiva</td>
                      <td className="">{power}W</td>
                    </tr>
                    <tr>
                      <td className="">Tiempo de vuelo</td>
                      <td className="">{flightTime.toFixed(2)}s</td>
                    </tr>
                    <tr>
                      <td className="">Altura de vuelo</td>
                      <td className="">{flightHeight.toFixed(2)}m</td>
                    </tr>
                    <tr>
                      <td className="">Velocidad de despegue</td>
                      <td className="">{takeoffSpeed.toFixed(2)}m/s</td>
                    </tr>
                  </>
                ) : null}{" "}
                {dropJumpVisible ? (
                  <>
                    <tr>
                      <td className=""></td>
                      <td className=""></td>
                    </tr>
                    <thead>
                      <tr>
                        <th className="">Fase de caida</th>
                      </tr>
                    </thead>
                    <tr>
                      <td className="">Tiempo de caida</td>
                      <td className="">{flightTime.toFixed(2)}s</td>
                    </tr>
                    <tr>
                      <td className="">Altura de caida</td>
                      <td className="">{flightHeight.toFixed(2)}m</td>
                    </tr>
                    <tr>
                      <td className="">Velocidad de caida</td>
                      <td className="">{dropSpeed.toFixed(2)}m/s</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className=""></td>
                    </tr>
                    <tr>
                      <td className="">Tiempo de contacto</td>
                      <td className="">{contactTime.toFixed(3)}s</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className=""></td>
                    </tr>
                    <thead>
                      <tr>
                        <th className="">Fase de impulso</th>
                      </tr>
                    </thead>
                    <tr>
                      <td className="3">Tiempo propulsivo</td>
                      <td className="">{propTime}s</td>
                    </tr>
                    <tr>
                      <td className="">Distancia Propulsiva</td>
                      <td className="">{propDist}m</td>
                    </tr>
                    <tr>
                      <td className="">Fuerza media propulsiva</td>
                      <td className="">{force}N</td>
                    </tr>
                    <tr>
                      <td className="">Potencia media propulsiva</td>
                      <td className="">{power}W</td>
                    </tr>
                    <thead>
                      <tr>
                        <th className="">Fase de vuelo</th>
                      </tr>
                    </thead>
                    <tr>
                      <td className="">Tiempo de vuelo</td>
                      <td className="">{flightTime2.toFixed(2)}s</td>
                    </tr>
                    <tr>
                      <td className="">Altura del salto</td>
                      <td className="">{flightHeight2.toFixed(2)}m</td>
                    </tr>
                    <tr>
                      <td className="">Velocidad de despegue</td>
                      <td className="">{takeoffSpeed2.toFixed(2)} m/s</td>
                    </tr>
                  </>
                ) : null}
                {stiffnessVisible ? (
                  <>
                    <tr>
                      <td className=""></td>
                      <td className=""></td>
                    </tr>
                    <thead>
                      <tr>
                        <th className="">Análisis</th>
                      </tr>
                    </thead>
                    <tr>
                      <td className="">Stiffness</td>
                      <td className="">{stiffnessData.stiffness}N/m</td>
                    </tr>
                    <tr>
                      <td className="">Frecuencia</td>
                      <td className="">
                        {stiffnessData.frequency.toFixed(2)}Hz
                      </td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className=""></td>
                    </tr>
                    <thead>
                      <tr>
                        <th className="">Tiempos de vuelo y contacto</th>
                      </tr>
                    </thead>
                    <tr>
                      <td className="">Primer ciclo</td>
                      <td className="">tv: {stiffnessData.tV23.toFixed(3)}s</td>
                      <td className="">tc: {stiffnessData.tC34.toFixed(3)}s</td>
                    </tr>
                    <tr>
                      <td className="">Segundo ciclo</td>
                      <td className="">tv: {stiffnessData.tV45.toFixed(3)}s</td>
                      <td className="">
                        tc: {stiffnessData.tC56.toFixed(3)} s
                      </td>
                    </tr>
                    <tr>
                      <td className="">Tercer ciclo</td>
                      <td className="">tv: {stiffnessData.tV67.toFixed(3)}s</td>
                      <td className="">tc: {stiffnessData.tC78.toFixed(3)}s</td>
                    </tr>
                    <tr>
                      <td className="">Cuarto ciclo</td>
                      <td className="">tv: {stiffnessData.tV89.toFixed(3)}s</td>
                      <td className="">
                        tc: {stiffnessData.tC910.toFixed(3)}s
                      </td>
                    </tr>
                    <tr>
                      <td className="">Quinto ciclo</td>
                      <td className="">
                        tv: {stiffnessData.tV1011.toFixed(3)}s
                      </td>
                      <td className="">
                        tc: {stiffnessData.tC1112.toFixed(3)} s
                      </td>
                    </tr>
                  </>
                ) : null}
              </tbody>
            </table>
          </div>
          {/* ---------------------------------- */}
        </div>
      </section>

      <div className="chart-jump">
        <Chart
          x={arrayY0F}
          xName="aceleración en y"
          xColor="red"
          y={xAxisArray}
          yName="x axis"
          yColor="black"
          // z={verticalWristArray}
          // zName="transparent"
          zColor="white"
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

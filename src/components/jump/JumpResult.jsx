import React, { useState, useEffect } from "react";
import Chart from "../otros/Chart";
import getDate from "../../auxiliaries/getDate";
import accelerationArrays from "../../auxiliaries/data_analysis/accelerationArrays";
import freeJumpAnalysis from "../../auxiliaries/data_analysis/freeJumpanalysis";
import squatJumpAnalysis from "../../auxiliaries/data_analysis/squatJumpAnalysis";
import dropJumpAnalysis from "../../auxiliaries/data_analysis/dropJumpAnalysis";
import jumpProcess from "../../auxiliaries/data_analysis/jumpProcess";
import stiffnessAnalysis from "../../auxiliaries/data_analysis/stiffnessAnalysis";
import GeneralDataClientsView from "../../views/GeneralDataClientsView";

function JumpResult({
  accY,
  testTime,
  weight,
  motionType,
  testsVisible,
  handleTestVisible,
}) {
  console.log(testTime, weight, motionType);
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

  // const { accX, accY, accZ, arrayAccTime } = accelerationArrays(
  //   test.accData,
  //   test.testTime
  // );

  useEffect(() => {
    // setWeight(weight);
    switch (motionType) {
      case "free":
        const { freeArrayY1, freeXAxis, arrTf, interval } = freeJumpAnalysis(
          accY,
          testTime,
          weight
        );
        setArrayYF(freeArrayY1);
        setXAxisArray(freeXAxis);
        setArrayT0F(arrTf);
        setInterval(interval);
        break;
      case "squat jump":
        const {
          sJAccYFinal,
          xAxis,
          flightTime,
          flightHeight,
          takeoffSpeed,
          sJInterval,
          arrTfinal,
        } = squatJumpAnalysis(accY, testTime, weight);

        setArrayYF(sJAccYFinal);
        setXAxisArray(xAxis);
        setSquatJumpVisible(true);
        setFlightTime(flightTime);
        setFlightHeight(flightHeight);
        setTakeoffSpeed(takeoffSpeed);
        setInterval(sJInterval);
        setArrayT0F(arrTfinal);
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
        } = jumpProcess(accY, testTime);
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
        break;
      case "drop jump":
        const {
          dropJumpAccY0F,
          dropJumpXAxis,
          interv,
          flightTime1,
          flightHeight1,
          dropSpeed,
          contactTime,
          flightTime2,
          flightHeight2,
          takeoffSpeed2,
          arrTF,
        } = dropJumpAnalysis(accY, testTime, weight);
        setArrayYF(dropJumpAccY0F);
        setXAxisArray(dropJumpXAxis);
        setDropJumpVisible(true);
        setFlightTime(flightTime1);
        setFlightHeight(flightHeight1);
        setTakeoffSpeed(dropSpeed);
        setInterval(interv);
        setDropSpeed(dropSpeed);
        setContactTime(contactTime);
        setFlightHeight2(flightHeight2);
        setFlightTime2(flightTime2);
        setTakeoffSpeed2(takeoffSpeed2);
        setArrayT0F(arrTF);
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
        } = stiffnessAnalysis(accY, testTime, weight);
        setArrayYF(arrayYCentral0F);
        setXAxisArray(stiffnessXAxis);
        setStiffnessData(stiffnessData);
        setStiffnessVisible(true);
        setInterval(stiffnessInterval);
        setArrayT0F(arrTCentral0F);
        break;
    }
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          {/* <GeneralDataClientsView test={test} /> */}
          {/* ---------------------------------- */}
          <div className="mt-10 lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Analisis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Tiempo de evaluación
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {testTime / 1000} s
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Tiempo de ejecución
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {xAxisArray.length * interval} s
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Intervalo de muestreo
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {interval} s
                  </td>
                </tr>
                {squatJumpVisible || cMJumpVisible ? (
                  <>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Tiempo propulsivo
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {propTime} s
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Distancia Propulsiva
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {propDist} m
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Tiempo de vuelo
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {flightTime} s
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Altura de vuelo
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {flightHeight} m
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Velocidad de despegue
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {takeoffSpeed} m/s
                      </td>
                    </tr>
                  </>
                ) : null}{" "}
                {dropJumpVisible ? (
                  <>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                    </tr>
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                          Fase de caida
                        </th>
                      </tr>
                    </thead>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Tiempo de caida
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {flightTime.toFixed(2)} s
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Altura de caida
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {flightHeight.toFixed(2)} m
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Velocidad de caida
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {dropSpeed.toFixed(2)} m/s
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Tiempo de contacto
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {contactTime.toFixed(3)} s
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                    </tr>
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                          Fase de impulso
                        </th>
                      </tr>
                    </thead>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Tiempo de vuelo
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {flightTime2.toFixed(2)} s
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Altura de caida
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {flightHeight2.toFixed(2)} m
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Velocidad de caida
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {takeoffSpeed2.toFixed(2)} m/s
                      </td>
                    </tr>
                  </>
                ) : null}
                {stiffnessVisible ? (
                  <>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                    </tr>
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                          Análisis
                        </th>
                      </tr>
                    </thead>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Stiffness
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {stiffnessData.stiffness} N/m
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Frecuencia
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {stiffnessData.frequency.toFixed(2)} Hz
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"></td>
                    </tr>
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                          Tiempos de vuelo y contacto
                        </th>
                      </tr>
                    </thead>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Primer ciclo
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        tv: {stiffnessData.tV23.toFixed(3)} s
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        tc: {stiffnessData.tC34.toFixed(3)} s
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Segundo ciclo
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        tv: {stiffnessData.tV45.toFixed(3)} s
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        tc: {stiffnessData.tC56.toFixed(3)} s
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Tercer ciclo
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        tv: {stiffnessData.tV67.toFixed(3)} s
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        tc: {stiffnessData.tC78.toFixed(3)} s
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Cuarto ciclo
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        tv: {stiffnessData.tV89.toFixed(3)} s
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        tc: {stiffnessData.tC910.toFixed(3)} s
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Quinto ciclo
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        tv: {stiffnessData.tV1011.toFixed(3)} s
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
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

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
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
          <div className="mt-10 w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <div className="flex w-full justify-center items-end">
              <button
                onClick={() => handleTestVisible()}
                className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Ir a evaluaciones
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JumpResult;

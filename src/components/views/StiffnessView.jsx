import React from "react";
import { accProcess } from "../../auxiliaries/data_analysis/accProcess";
import Chart from "../otros/Chart";
import getDate from "../../auxiliaries/getDate";
import stiffnessAnalysis from "../../auxiliaries/stiffness/stiffnessAnalysis";

const StiffnessView = ({ test, testsVisible }) => {
  const { accData, testTime, weight } = test;

  const {
    stiffnessData,
    arrayYCentral,
    arrayYCentral0F,
    arrayYCentral0,
    accX,
    accY,
    accZ,
    arrayAccTime,
    indexValidation,
  } = stiffnessAnalysis(accData, testTime, weight);
  const testDate = getDate(test.date);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              {test.email}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Stiffness
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Fecha
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    {testDate}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td className="px-4 py-3">Altura</td>
                  <td className="px-4 py-3">{currentTest.size} cm</td> */}
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">Peso</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    {test.weight} kg
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Altura
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    {test.size} kg
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Género
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    {test.gender}
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Actividad física que realiza
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {test.mPActivity}
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Frecuencia:
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    {test.pALevel}
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Cualidad principal
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {test.mFComponents}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font mt-10">
        <div className="container px-5 mx-auto">
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Stiffness
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    {stiffnessData.stiffness} N/m
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Primer ciclo
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    tv {stiffnessData.tV23.toFixed(3)} s - tc
                    {stiffnessData.tC34.toFixed(3)} s
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Segundo ciclo
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    tv-1{stiffnessData.tV45.toFixed(3)} s - tc-1
                    {stiffnessData.tC56.toFixed(3)} s
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Tercer ciclo
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    tv-1{stiffnessData.tV67.toFixed(3)} s - tc-1
                    {stiffnessData.tC78.toFixed(3)} s
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Cuarto ciclo
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    tv-1{stiffnessData.tV89.toFixed(3)} s - tc-1
                    {stiffnessData.tC910.toFixed(3)} s
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Quinto ciclo
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    tv-1{stiffnessData.tV1011.toFixed(3)} s - tc-1
                    {stiffnessData.tC1112.toFixed(3)} s
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <Chart
            x={arrayYCentral0}
            xName="aceleración en y"
            xColor="red"
            // y={ankleAngleArray}
            // yName="Angulo de tobillo"
            // yColor="blue"
            // z={verticalWristArray}
            // zName="Wrist"
            // zColor="green"
            t={arrayAccTime}
          />
          <div className="mt-10 w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <div className="flex w-full justify-center items-end">
              <button
                onClick={testsVisible}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Ir a evaluaciones
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StiffnessView;

import React from "react";
import GeneralDataClientsView from "./GeneralDataClientsView";
import RefImages from "../components/artro/RefImages";
import gyroProcess from "../auxiliaries/data_analysis/gyro/gyroProcess";
import gyroArrays from "../auxiliaries/data_analysis/gyro/gyroArrays";
import Chart from "../components/otros/Chart";

const ArtroView = ({ test, testsVisible, handleTestVisible }) => {
  const { gyroX, gyroY, gyroZ, arrayGyroTime } = gyroArrays(
    test.gyroData,
    test.testTime
  );
  const {
    xCountRadAngle,
    xArrayGradAngle,
    xCountGradAngle,
    xArrayRadAngle,
    yCountRadAngle,
    yArrayGradAngle,
    yCountGradAngle,
    zArrayRadAngle,
    zCountRadAngle,
    zArrayGradAngle,
    zCountGradAngle,
  } = gyroProcess(gyroX, gyroY, gyroZ, arrayGyroTime, test.testTime);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <GeneralDataClientsView test={test} />
          <div className="mt-10 lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Analisis
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Nombre del test
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {test.motionType}
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Segmento corporal
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {test.segment}
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Movimietnto
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {test.motion}
                  </td>
                </tr>
                <RefImages
                  segment={test.segment}
                  side={test.side}
                  movement={test.motion}
                />
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    movimeinto en x
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {xCountGradAngle.toFixed(2)}°
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    movimiento en y
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {yCountGradAngle.toFixed(2)}°
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    movimiento en z
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    {zCountGradAngle.toFixed(2)}°
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ---------------------------------- */}
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <Chart
            x={xArrayGradAngle}
            xName="rotación en x"
            xColor="red"
            y={yArrayGradAngle}
            yName="rotación en y"
            yColor="blue"
            z={zArrayGradAngle}
            zName="rotación en z"
            zColor="green"
            t={arrayGyroTime}
          />
          <div className="mt-10 w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <div className="flex w-full justify-center items-end">
              <button
                onClick={() => handleTestVisible()}
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

export default ArtroView;

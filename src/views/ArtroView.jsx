import React from "react";
import GeneralDataClientsView from "./GeneralDataClientsView";

const ArtroView = ({ test, testsVisible, handleTestVisible }) => {
  console.log(test);
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
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Ubicación del dispositivo
                  </td>
                  <img
                    className="h-20 rounded  object-cover object-center mb-3"
                    alt="content"
                    src="https://storage.googleapis.com/mobile-artro/ubucacion_dispositivo/ubicacion_dispositivo/axial/cervical/cervical.jpg"
                  ></img>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ---------------------------------- */}
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          {/* <Chart
            x={arrayY0F}
            xName="aceleración en y"
            xColor="red"
            y={xAxisArray}
            yName="x axis"
            yColor="black"
            z={verticalWristArray}
            zName="transparent"
            zColor="white"
            t={arrayT0F}
          /> */}
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

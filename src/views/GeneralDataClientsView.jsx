import React from "react";
import getDate from "../auxiliaries/getDate";

function GeneralDataClientsView({ test }) {
  const testDate = getDate(test.date);
  return (
    <div>
      <div className="flex flex-col text-center w-full mb-20">
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
          {test.motionType}
        </p>
      </div>
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Email
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                {test.email}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t-2 border-gray-200 px-4 py-3">Fecha</td>
              <td className="border-t-2 border-gray-200 px-4 py-3">
                {testDate} kg
              </td>
            </tr>
            <tr>
              <td className="border-t-2 border-gray-200 px-4 py-3">Peso</td>
              <td className="border-t-2 border-gray-200 px-4 py-3">
                {test.weight} kg
              </td>
            </tr>
            <tr>
              <td className="border-t-2 border-gray-200 px-4 py-3">Altura</td>
              <td className="border-t-2 border-gray-200 px-4 py-3">
                {test.size} kg
              </td>
            </tr>
            <tr>
              <td className="border-t-2 border-gray-200 px-4 py-3">Género</td>
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
  );
}

export default GeneralDataClientsView;

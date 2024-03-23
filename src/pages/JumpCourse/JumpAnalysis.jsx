import React, { useState } from "react";
import ReactFileReader from "react-file-reader";
import Chart from "../../components/Chart";
const JumpAnalysis = () => {
  const [verticalTimeArray, setVerticalTimeArray] = useState([]);
  const [verticalTrocanterArray, setVerticalTrocanterArray] = useState([]);
  const [verticalCondiloArray, setVerticalCondiloArray] = useState([]);
  const [verticalMaleoloArray, setVerticalMaleoloArray] = useState([]);
  const [verticalCalcaneoArray, setVerticalCalcaneoArray] = useState([]);
  const [verticalQuintoMArray, setVerticalQuintoMArray] = useState([]);
  const [horizontalTimeArray, setHorizontalTimeArray] = useState([]);
  const [horizontalTrocanterArray, setHorizontalTrocanterArray] = useState([]);
  const [horizontalCondiloArray, setHorizontalCondiloArray] = useState([]);
  const [horizontalMaleoloArray, setHorizontalMaleoloArray] = useState([]);
  const [horizontalCalcaneoArray, setHorizontalCalcaneoArray] = useState([]);
  const [horizontalQuintoMArray, setHorizontalQuintoMArray] = useState([]);
  const [trocanterArray, setTrocanterArray] = useState([]);
  const [condiloArray, setCondiloArray] = useState([]);
  const [maleoloArray, setMaleoloArray] = useState([]);
  const [calcaneoArray, setCalcaneoArray] = useState([]);
  const [quintoMArray, setQuintoMArray] = useState([]);
  const [kneeAngle, setKneeAngle] = useState([]);
  const [ankleAngle, setAnkleAngle] = useState([]);

  const uploadVerticalFile = (file) => {
    // leemos el archivo csv que viene en un string con saltos de linea, primero estan los titulos, en este caso son 6, el tiempo y cinco trayectorias, cada fila está separada por ";"
    let read = new FileReader();
    read.onload = function (e) {
      const rawData = read.result;

      //generamos un array separando por saltos de linea y eliminamos la primera hilera
      const data = rawData.split("\n").slice(1);
      // obtenemos cada columna separando por ";", [0]: tiempo, [1]: trocanter, [2]:condilo, [3]:maleolo,[4]:calcaneo,[5]:quinto metatarsiano
      const rows = data.map((el) => el.split(";"));
      // eliminamos el ultimo elemento que está vacio y nos da error
      rows.pop();
      // generamos los arrays de cada marcador, y reemplazamos las comas por los puntos
      const time = [];
      const trocanter = [];
      const condilo = [];
      const maleolo = [];
      const calcaneo = [];
      const quintoM = [];

      rows.map((el) => {
        time.push(Number(el[0]));
        trocanter.push(Number(el[1].replace(",", ".")));
        condilo.push(Number(el[2].replace(",", ".")));
        maleolo.push(Number(el[3].replace(",", ".")));
        calcaneo.push(Number(el[4].replace(",", ".")));
        quintoM.push(Number(el[5].replace(",", ".")));
      });
      // seteamos las variables
      setVerticalTimeArray(time);
      setVerticalTrocanterArray(trocanter);
      setVerticalCondiloArray(condilo);
      setVerticalMaleoloArray(maleolo);
      setVerticalCalcaneoArray(calcaneo);
      setVerticalQuintoMArray(quintoM);
    };
    read.readAsText(file[0]);
  };
  const uploadHorizontalFile = (file) => {
    // comenzamos igual que el vertical
    let read = new FileReader();
    read.onload = function (e) {
      const rawData = read.result;
      const data = rawData.split("\n").slice(1);
      const rows = data.map((el) => el.split(";"));
      rows.pop();

      const time = [];
      const trocanter = [];
      const condilo = [];
      const maleolo = [];
      const calcaneo = [];
      const quintoM = [];
      rows.map((el) => {
        time.push(Number(el[0]));
        trocanter.push(Number(el[1].replace(",", ".")));
        condilo.push(Number(el[2].replace(",", ".")));
        maleolo.push(Number(el[3].replace(",", ".")));
        calcaneo.push(Number(el[4].replace(",", ".")));
        quintoM.push(Number(el[5].replace(",", ".")));
      });
      setHorizontalTimeArray(time);
      setHorizontalTrocanterArray(trocanter);
      setHorizontalCondiloArray(condilo);
      setHorizontalMaleoloArray(maleolo);
      setHorizontalCalcaneoArray(calcaneo);
      setHorizontalQuintoMArray(quintoM);

      // generamos arrais para cada marcador con las dos coordenadas
      const trocanterArr = [];
      const condiloArr = [];
      const maleoloArr = [];
      const calcaneoArr = [];
      const quintoMArr = [];
      verticalTrocanterArray.map((el, index) => {
        trocanterArr.push([verticalTrocanterArray[index], trocanter[index]]);
        condiloArr.push([verticalCondiloArray[index], condilo[index]]);
        maleoloArr.push([verticalMaleoloArray[index], maleolo[index]]);
        calcaneoArr.push([verticalCalcaneoArray[index], calcaneo[index]]);
        quintoMArr.push([verticalQuintoMArray[index], quintoM[index]]);
      });

      // declaramos 3 arrays de  vectores, t para muslo, l para pierna y f para pie

      const tArray = [];
      const lArray = [];
      const fArray = [];

      // t se forma con los puntos de trocanter y condilo
      // l se forma con el de condilo y maleolo
      // f se forma con el de maleolo y pie
      trocanterArr.map((el, index) => {
        tArray.push([
          condiloArr[index][1] - trocanterArr[index][1],
          condiloArr[index][0] - trocanterArr[index][0],
        ]);

        lArray.push([
          condiloArr[index][1] - maleoloArr[index][1],
          condiloArr[index][0] - maleoloArr[index][0],
        ]);
        fArray.push([
          quintoMArr[index][1] - maleoloArr[index][1],
          quintoMArr[index][0] - maleoloArr[index][0],
        ]);
      });

      // producto vectorial
      const dotProductTL = [];
      const dotProductLF = [];

      tArray.map((el, index) => {
        dotProductTL.push(
          tArray[index][0] * lArray[index][0] +
            tArray[index][1] * lArray[index][1]
        );
        dotProductLF.push(
          lArray[index][0] * fArray[index][0] +
            lArray[index][1] * fArray[index][1]
        );
      });

      //producto de los modulos
      const tModule = [];
      const lModule = [];
      const fModule = [];
      tArray.map((el, index) => {
        tModule.push(
          Math.sqrt(
            Math.pow(tArray[index][0], 2) + Math.pow(tArray[index][1], 2)
          )
        );

        lModule.push(
          Math.sqrt(
            Math.pow(lArray[index][0], 2) + Math.pow(lArray[index][1], 2)
          )
        );
        fModule.push(
          Math.sqrt(
            Math.pow(fArray[index][0], 2) + Math.pow(fArray[index][1], 2)
          )
        );
      });

      const moduleTLProduct = [];
      const moduleLFProduct = [];
      tModule.map((el, index) => {
        moduleTLProduct.push(tModule[index] * lModule[index]);
        moduleLFProduct.push(lModule[index] * fModule[index]);
      });

      const kneeAngle = [];
      const ankleAngle = [];

      moduleTLProduct.map((el, index) => {
        kneeAngle.push(
          (Math.acos(dotProductTL[index] / moduleTLProduct[index]) * 180) /
            Math.PI
        );
        ankleAngle.push(
          (Math.acos(dotProductLF[index] / moduleLFProduct[index]) * 180) /
            Math.PI
        );
      });

      setKneeAngle(kneeAngle);
      setAnkleAngle(ankleAngle);
      setTrocanterArray(trocanter);
      setCondiloArray(condiloArr);
      setMaleoloArray(maleolo);
      setCalcaneoArray(calcaneo);
      setQuintoMArray(quintoM);
    };
    read.readAsText(file[0]);
  };
  return (
    <div>
      <ReactFileReader handleFiles={uploadVerticalFile} fileTypes={".csv"}>
        <button className="flex mx-auto mt-10 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
          Vertical
        </button>
      </ReactFileReader>
      <ReactFileReader handleFiles={uploadHorizontalFile} fileTypes={".csv"}>
        <button className="flex mx-auto mt-10 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
          Horizontal
        </button>
      </ReactFileReader>
      <Chart
        x={kneeAngle}
        xName="Angulo de rodilla"
        xColor="red"
        y={ankleAngle}
        yName="Angulo de tobillo"
        yColor="blue"
        // z={verticalWristArray}
        // zName="Wrist"
        // zColor="green"
        t={verticalTimeArray}
      />
    </div>
  );
};

export default JumpAnalysis;

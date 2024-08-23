import numbers from "numbers";
import powerCMJDropAnalysis from "./powerCMJDropAnalysis";
// generar csv

export default function jumpProcess(accY = [], testTime = 0, weight = 0) {
  const evT = testTime / 1000;
  const cMjumpInterv = Number((evT / accY.length).toFixed(4));
  const modo = numbers.statistic.mode(accY);

  const arrayT0 = [];
  let countArrayT0 = 0;

  const arrayY0 = accY.map((el) => (el - modo) * 9.81);

  // z-y angle

  arrayY0.map((el) => {
    arrayT0.push(Number((countArrayT0 += cMjumpInterv).toFixed(3)));
  });

  const arrayYT = [];
  arrayY0.map((el, index) => {
    arrayYT.push([arrayT0[index], el]);
  });

  const index2 = arrayY0.findIndex(
    (el, index) =>
      el > modo &&
      el < arrayY0[index + 1] &&
      el < arrayY0[index + 2] &&
      el < arrayY0[index + 3] &&
      el < arrayY0[index + 4] &&
      el < arrayY0[index + 5] &&
      el < arrayY0[index + 6] &&
      el < arrayY0[index + 7] &&
      el < arrayY0[index + 8] &&
      el < arrayY0[index + 9] &&
      el < arrayY0[index + 10] &&
      el < arrayY0[index + 11] &&
      el < arrayY0[index + 12] &&
      el < arrayY0[index + 13] &&
      el < arrayY0[index + 14] &&
      el < arrayY0[index + 15] &&
      el < arrayY0[index + 16]
  );

  const arrayY1 = [];

  arrayY0.map((el, index) => {
    if (index < index2) {
      arrayY1.push(el);
    }
  });

  const modo2 = numbers.statistic.mode(arrayY1);
  const index1 = arrayY1.findIndex((el, index) => el < modo2 - 0.3);

  const arrayY2 = [];

  arrayY1.map((el, index) => {
    if (index > index1) {
      arrayY2.push(el);
    }
  });

  const index3 = arrayY0.findIndex((el, index) => el < 0 && index > index2);

  const arrayY3 = [];

  const arrayY3T = [];
  let county3T = 0;
  arrayY0.map((el, index) => {
    if (index >= index2 && index < index3) {
      arrayY3.push(el);

      arrayY3T.push((county3T += cMjumpInterv));
    }
  });

  // array y4 es el de la fase aerea, para buscar el indice 4 que seria cuando termina el array 4 buscamos valores negativos de aceleración pero solo luego de los 20 primeros valores para que no tome ningun pico de inercia positivo
  const index4 = arrayY0.findIndex(
    (el, index) => el > 0 && index > index3 + 20
  );

  const arrayY4 = [];

  const arrayXAxis = [];

  arrayY0.map((el, index) => {
    if (index - 3 > index3 && index + 3 < index4) {
      arrayY4.push(el);

      arrayXAxis.push(0);
    }
  });

  const tV = Number((arrayY4.length * cMjumpInterv).toFixed(3));

  const alturaVuelo = Number(((1 / 8) * 9.81 * Math.pow(tV, 2)).toFixed(3));
  const velD = Number(Math.sqrt(2 * 9.81 * alturaVuelo).toFixed(3));

  // ----------------------reverse

  const arrayY3Invertido = [...arrayY3].reverse();

  // calculamos la velocidad máxima como el 100 por ciento de la de despegue
  const velMax = (100 * velD) / 95;

  // como la velocidad es maxima, la aceleración debe ser cero, entonces integramos hacia atras la aceleración partiendo como valor incial de velocidad la máxima
  const integralArray = [];
  let countDP = velMax;

  // MULTIPLICAR * 1.5 PARA ELEVAR LA CURVA
  for (let i = 0; i < arrayY3Invertido.length - 1; i++) {
    countDP -=
      ((Number(arrayY3Invertido[i]) + Number(arrayY3Invertido[i + 1])) *
        (arrayY3T[i + 1] - arrayY3T[i])) /
      2;
    integralArray.push(countDP);
  }
  // del array de velocidad filtramos los positivos y para saber al length donde la velocidad es cero que corresponde al punto mas bajo de la trayectoria

  const arrayY3InvertidoPositivo = integralArray.filter((el) => el > 0);
  integralArray.reverse();

  // ahora tenemos un array de velocidad que va de cero a la maxima. nos falta saber que intervalo de tiempo existe entre este punto y la velocidad de despegue, que seria el punto donde la asceleración es monor a -5 m/s". le sumamos por tanteo 4 intervalos de tiempo

  // para obtener la distancia sumamos la superficie

  // a. del triangulo cuya base es el intervalo de tiempo desde la posición mas baja hasta la velocidad máxima

  const propulsiveMaxTime = Number(
    (arrayY3InvertidoPositivo.length * cMjumpInterv).toFixed(3)
  );
  const propulsiveMaxDist = (propulsiveMaxTime * velMax) / 2;

  // b. el paralelepipedo de base 4 intervalos de tiempo agregados, un lado es la vemax y el otro la v de despegue. aplicamos regla del trapecio

  const sumaVel = velMax + velD;
  const intervalo = cMjumpInterv * 3;
  const propulsiveDespDist = (sumaVel * intervalo) / 2;

  // sumamos

  const propulsiveDistance = Number(propulsiveMaxDist.toFixed(3));

  // el tiempo propulsivo seria
  // VER ACA CORREGIR TIEMPO PROPULSIVO
  const propulsiveTime = // intervalo +
    Number((arrayY3InvertidoPositivo.length * cMjumpInterv).toFixed(3));
  // {----------------------------------------------------}

  const index5 = arrayY0.findIndex((el, index) => el < 0 && index > index4);
  const index6 = arrayY0.findIndex((el, index) => el > 0 && index > index5);

  const arrayY0F = [];

  const accT = [];
  let countInterval = 0;
  const arrayY0Vuelo = [];
  const cMJXAxis = [];

  arrayY0.forEach((el, index) => {
    if (index > index1 && index < index6) {
      arrayY0F.push(Number(el.toFixed(3)));

      cMJXAxis.push(0);
      accT.push((countInterval += cMjumpInterv).toFixed(3));
    }
    if (index > index3 && index < index4) {
      arrayY0Vuelo.push(Number(el.toFixed()));
    }
  });

  const initalTail = [];
  arrayY0.map((el, index) => {
    if (index < index1) initalTail.push(el);
  });

  const finalTail = [];
  arrayY0.map((el, index) => {
    if (index > arrayY0.length - 90) finalTail.push(el);
  });
  const { power, fRM } = powerCMJDropAnalysis(
    weight,
    tV,
    propulsiveTime,
    alturaVuelo
  );

  const validation = true;
  // initalTail.length > 80 &&
  // finalTail.length > 80 &&
  // index1 !== -1 &&
  // index2 !== -1 &&
  // index3 !== -1 &&
  // index4 !== -1 &&
  // index5 !== -1 &&
  // index6 !== -1 &&
  // index1 < index2 &&
  // index2 < index3 &&
  // index3 < index4 &&
  // index4 < index5 &&
  // index5 < index6;

  //
  const arrayY0FLong = arrayY0F;
  const cMJXAxisLong = cMJXAxis;

  // --------------------------IntegralArrayModificado--------------------------------
  const integralArrayModified = [];
  let countDPModified = velMax;
  for (let i = 0; i < arrayY3Invertido.length - 1; i++) {
    countDPModified -=
      ((Number(arrayY3Invertido[i]) + Number(arrayY3Invertido[i + 1])) *
        1.5 *
        (arrayY3T[i + 1] - arrayY3T[i])) /
      2;
    integralArrayModified.push(countDPModified);
  }
  const arrayY3InvertidoPositivoModified = integralArrayModified.filter(
    (el) => el > 0
  );
  integralArrayModified.reverse();
  // imprimir tiempo propulsivo
  const propulsiveMaxTimeModified = Number(
    (arrayY3InvertidoPositivoModified.length * cMjumpInterv).toFixed(3)
  );
  // imprimir distancia propulsiva
  const propulsiveMaxDistModified = Number(
    ((propulsiveMaxTimeModified * velMax) / 2).toFixed(3)
  );

  const resultM = powerCMJDropAnalysis(
    weight,
    tV,
    propulsiveMaxTimeModified,
    alturaVuelo
  );

  const fRMModified = resultM.fRM;
  const powerModified = resultM.power;

  // -------------------------------Fin modified------------------------------------
  return {
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
    propulsiveMaxTimeModified,
    propulsiveMaxDistModified,
    fRMModified,
    powerModified,
  };
}

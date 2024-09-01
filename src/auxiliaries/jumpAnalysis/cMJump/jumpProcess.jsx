import numbers from "numbers";
import powerCMJDropAnalysis from "./powerCMJDropAnalysis";
import getIndexes from "./cmj_auxiliaries/getIndexes";
import getPropulsiveData from "./cmj_auxiliaries/getPropulsiveData";
import getForceCorrectionIndex from "./cmj_auxiliaries/getForceCorrectionIndex";
export default function jumpProcess(accY = [], testTime = 0, weight = 0) {
  const evT = testTime / 1000;
  const cMjumpInterv = Number((evT / accY.length).toFixed(4));
  const modo = numbers.statistic.mode(accY);

  // INDICES
  const {
    arrayY0,
    arrayY3,
    arrayY4,
    arrayY3T,
    arrayXAxis,
    accT,
    arrayY0F,
    arrayY0FLong,
    cMJXAxis,
    cMJXAxisLong,
    arrayY13,
    arrayY13T,
  } = getIndexes(accY, modo, cMjumpInterv);

  // TIEMPO DE VUELO
  const tV = Number((arrayY4.length * cMjumpInterv).toFixed(3));

  // ALTURA DE VUELO
  const alturaVuelo = Number(((1 / 8) * 9.81 * Math.pow(tV, 2)).toFixed(3));

  // VELOCIDAD DE DESPEGUE
  const velD = Number(Math.sqrt(2 * 9.81 * alturaVuelo).toFixed(3));

  // TIEMPO PROPULSIVO / DISTANCIA PROPULSIVA
  const {
    propulsiveDistance,
    propulsiveTime,
    propulsiveAccelerationArray,
    meanPropulsiveAcceleration,
    velMax,
  } = getPropulsiveData(
    arrayY3,
    arrayY3T,
    velD,
    cMjumpInterv,
    arrayY13,
    arrayY13T
  );

  // criterios para la fuerza y la potencia
  const accV = velMax / propulsiveTime;

  // fuerza
  const propulsiveForceArray = propulsiveAccelerationArray.map(
    (el, i) => (propulsiveAccelerationArray[i] + 9.81) * weight
  );
  // obtenemos el factor de correccción de la fuerza por perdida del angulo del dispositivo
  const correctionForceIndex = getForceCorrectionIndex(propulsiveTime);

  const fRM = parseInt(
    numbers.statistic.mean(propulsiveForceArray) * correctionForceIndex * 0.99
  );

  const power = parseInt(fRM * velMax * 0.5);

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
  };
}

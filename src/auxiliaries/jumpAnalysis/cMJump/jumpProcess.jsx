import numbers from "numbers";
import getIndexes from "./cmj_auxiliaries/getIndexes";
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
    groundContactTime,
  } = getIndexes(accY, modo, cMjumpInterv);

  // TIEMPO DE VUELO
  const tV = Number((arrayY4.length * cMjumpInterv).toFixed(3));

  // ALTURA DE VUELO
  const alturaVuelo = Number(((1 / 8) * 9.81 * Math.pow(tV, 2)).toFixed(3));

  // VELOCIDAD DE DESPEGUE
  const velD = Number(Math.sqrt(2 * 9.81 * alturaVuelo).toFixed(3));

  // RSI
  const rSI = Number((alturaVuelo / groundContactTime).toFixed(3));

  // criterios para la fuerza y la potencia

  // fuerza
  // obtenemos la la aceleración dividiendo la velocidad máxima por la mitad del tiempo propulsivo. es una aceleración media

  const propulsiveTime = Number((groundContactTime / 2.5).toFixed(3));
  const propulsiveDistance = Number(((velD * propulsiveTime) / 2).toFixed(3));
  const accHalf = velD / propulsiveTime;
  const totalAcceleration = accHalf + 9.81;

  // calculamos la fuerza con primera ley de Newton. corregimos para compenzar la falta
  const fRM = parseInt(totalAcceleration * weight);

  // obtenemos el factor de correccción de la fuerza por perdida del angulo del dispositivo
  const correctionPowerIndex = getForceCorrectionIndex(alturaVuelo);

  const power = parseInt(((fRM * velD) / 2) * correctionPowerIndex);

  const validation = true;

  // valores relativos

  const forceWeight = fRM / weight;
  const powerWeight = power / weight;
  const flightTimeContactTime = tV / propulsiveTime;

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
    rSI,
    forceWeight,
    powerWeight,
    flightTimeContactTime,
  };
}

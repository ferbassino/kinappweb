import numbers from "numbers";
import integralFunction from "./integral";
export default function jumpProcess(
  accX = [],
  accY = [],
  accZ = [],
  testTime = 0
) {
  const evT = testTime / 1000;
  const cMjumpInterv = evT / accY.length;
  const modo = numbers.statistic.mode(accY);
  const arrayY0 = accY.map((el) => (el - modo) * 9.81);

  const index2 = accY.findIndex(
    (el, index) =>
      el > modo &&
      el < accY[index + 1] &&
      el < accY[index + 2] &&
      el < accY[index + 3] &&
      el < accY[index + 4] &&
      el < accY[index + 5] &&
      el < accY[index + 6] &&
      el < accY[index + 7] &&
      el < accY[index + 8] &&
      el < accY[index + 9] &&
      el < accY[index + 10] &&
      el < accY[index + 11] &&
      el < accY[index + 12] &&
      el < accY[index + 13] &&
      el < accY[index + 14] &&
      el < accY[index + 15] &&
      el < accY[index + 16]
  );

  const arrayY1 = [];

  accY.map((el, index) => {
    if (index < index2) {
      arrayY1.push(el * 9.81);
    }
  });

  const modo2 = numbers.statistic.mode(arrayY1);
  const index1 = arrayY1.findIndex((el, index) => el < modo2 - 0.3);

  const arrayY2 = [];

  arrayY1.map((el, index) => {
    if (index > index1) arrayY2.push((el - modo) * 9.81);
  });

  const index3 = accY.findIndex((el, index) => el < modo && index > index2);

  const arrayY3 = [];

  const arrayY3T = [];
  let county3T = 0;
  accY.map((el, index) => {
    if (index > index2 && index < index3) {
      arrayY3.push((el - modo) * 9.81);
      arrayY3T.push((county3T += cMjumpInterv));
    }
  });

  const index4 = accY.findIndex((el, index) => el > modo && index > index3);

  const arrayY4 = [];

  accY.map((el, index) => {
    if (index - 1 > index3 && index + 2 < index4) {
      arrayY4.push((el - modo) * 9.81);
    }
  });
  console.log("-----------------------------------------");

  const tV = arrayY4.length * cMjumpInterv;

  const alturaVuelo = (1 / 8) * 9.81 * Math.pow(tV, 2);
  const velD = Math.sqrt(2 * 9.81 * alturaVuelo);

  // ----------------------reverse
  const arrayY3Invertido = [...arrayY3].reverse();

  // calculamos la velocidad máxima como el 100 por ciento de la de despegue
  const velMax = (100 * velD) / 90;

  // como la velocidad es maxima, la aceleración debe ser cero, entonces integramos hacia atras la aceleración partiendo como valor incial de velocidad la máxima
  const integralArray = [];
  let countDP = velMax;
  for (let i = 0; i < arrayY3Invertido.length; i++) {
    countDP -=
      ((Number(arrayY3Invertido[i]) + Number(arrayY3Invertido[i + 1])) *
        (arrayY3T[i + 1] - arrayY3T[i])) /
      2;
    integralArray.push(countDP);
  }
  // del array de velocidad filtramos los positivos y para saber al length donde la velocidad es cero que corresponde al punto mas bajo de la trayectoria

  const arrayY3InvertidoPositivo = integralArray.filter((el) => el > 0);

  // ahora tenemos un array de velocidad que va de cero a la maxima. nos falta saber que intervalo de tiempo existe entre este punto y la velocidad de despegue, que seria el punto donde la asceleración es monor a -5 m/s". le sumamos por tanteo 4 intervalos de tiempo

  // para obtener la distancia sumamos la superficie

  // a. del triangulo cuya base es el intervalo de tiempo desde la posición mas baja hasta la velocidad máxima

  const propulsiveMaxTime = Number(
    (arrayY3InvertidoPositivo.length * cMjumpInterv).toFixed(2)
  );

  const propulsiveMaxDist = (propulsiveMaxTime * velMax) / 2;

  // b. el paralelepipedo de base 4 intervalos de tiempo agregados, un lado es la vemax y el otro la v de despegue. aplicamos regla del trapecio

  const sumaVel = velMax + velD;
  const intervalo = cMjumpInterv * 4;
  const propulsiveDespDist = (sumaVel * intervalo) / 2;

  // sumamos

  const propulsiveDistance = propulsiveMaxDist + propulsiveDespDist;

  // el tiempo propulsivo seria

  const propulsiveTime = (
    intervalo +
    arrayY3InvertidoPositivo.length * cMjumpInterv
  ).toFixed(2);

  const index5 = accY.findIndex((el, index) => el < modo && index > index4);
  const index6 = accY.findIndex((el, index) => el > modo && index > index5);

  const arrayY0F = [];
  const arrT0F = [];
  let count = 0;
  const arrayY0Vuelo = [];
  const cMJXAxis = [];
  arrayY0.forEach((el, index) => {
    if (index > index1 && index < index6) {
      arrayY0F.push(Number(el.toFixed(2)));
      cMJXAxis.push(0);
      count += cMjumpInterv;
      arrT0F.push(count.toFixed(3));
    }
    if (index > index3 && index < index4) {
      arrayY0Vuelo.push(Number(el.toFixed(2)));
    }
  });

  const initalTail = [];
  accY.map((el, index) => {
    if (index < index1) initalTail.push(el);
  });
  const finalTail = [];
  accY.map((el, index) => {
    if (index > accY.length - 90) finalTail.push(el);
  });
  const initialTailValidation = initalTail.length > 90;
  const finalTailMode = numbers.statistic.mode(finalTail);

  const finalTailValidation = finalTailMode < 1.1 && finalTailMode > 0.9;

  const modeValidation = modo < 1.1 && modo > 0.9;

  const initialAngleZY = [];
  const initialAngleXY = [];

  accY.map((el, index) => {
    if (index < index2) {
      initialAngleZY.push(
        (Math.atan2(accZ[index], accY[index]) * 180) / Math.PI
      );
      initialAngleXY.push(
        (Math.atan2(accX[index], accY[index]) * 180) / Math.PI
      );
    }
  });
  const initialAngleZYMean = numbers.statistic.mean(initialAngleZY);
  const initialAngleXYMean = numbers.statistic.mean(initialAngleXY);

  const validation =
    initialTailValidation &&
    finalTailValidation &&
    modeValidation &&
    index1 !== -1 &&
    index2 !== -1 &&
    index3 !== -1 &&
    index4 !== -1 &&
    index5 !== -1 &&
    index6 !== -1 &&
    index1 < index2 &&
    index2 < index3 &&
    index3 < index4 &&
    index4 < index5 &&
    index5 < index6 &&
    initialAngleZYMean < 10 &&
    initialAngleZYMean > -10 &&
    initialAngleXYMean < 10 &&
    initialAngleXYMean > -10;

  return {
    arrayY0,
    arrayY0F,
    cMJXAxis,
    arrayY0Vuelo,
    tV,
    alturaVuelo,
    velD,

    validation,
    cMjumpInterv,
    arrT0F,
    propulsiveTime,
    propulsiveDistance,
  };
}

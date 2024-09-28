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
  console.log("nueva distancia propulsiva", propulsiveDistance);
  console.log("ground contact", groundContactTime);

  // calculamos la fuerza con primera ley de Newton. corregimos para compenzar la falta
  const fRM = parseInt(totalAcceleration * weight);

  // obtenemos el factor de correccción de la fuerza por perdida del angulo del dispositivo
  const correctionPowerIndex = getForceCorrectionIndex(alturaVuelo);

  const power = parseInt(((fRM * velD) / 2) * correctionPowerIndex);

  const power2 =
    (weight * 9.81 * (propulsiveDistance + alturaVuelo)) / propulsiveTime;
  console.log("---------potencia 2", power2);

  const validation = true;
  console.log("frm", fRM, power);

  const getOldMethod = (arrayY3, velD, cMjumpInterv) => {
    const arrayY3Invertido = [...arrayY3].reverse();

    // calculamos la velocidad máxima como el 100 por ciento de la de despegue
    const velMax = (100 * velD) / 95;

    // como la velocidad es maxima, la aceleración debe ser cero, entonces integramos hacia atras la aceleración partiendo como valor incial de velocidad la máxima
    const integralArray = [];
    let countDP = velMax;
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
      (arrayY3InvertidoPositivo.length * cMjumpInterv).toFixed(2)
    );
    const propulsiveMaxDist = (propulsiveMaxTime * velMax) / 2;

    // b. el paralelepipedo de base 4 intervalos de tiempo agregados, un lado es la vemax y el otro la v de despegue. aplicamos regla del trapecio

    const sumaVel = velMax + velD;
    const intervalo = cMjumpInterv * 3;
    const propulsiveDespDist = (sumaVel * intervalo) / 2;

    // sumamos

    const propulsiveDistance = (propulsiveMaxDist + propulsiveDespDist).toFixed(
      2
    );

    // el tiempo propulsivo seria

    const propulsiveTime = Number(
      intervalo + arrayY3InvertidoPositivo.length * cMjumpInterv
    ).toFixed(3);

    return { propulsiveDistance, propulsiveTime };
  };

  const result2 = getOldMethod(arrayY3, velD, cMjumpInterv);

  const powerCMJDropAnalysis = (weight, tV, result2, alturaVuelo) => {
    const tP = result2.propulsiveTime;
    // fuerza media
    const fM = (weight * 9.81 * tV) / (tP * 2);
    const fRM = parseInt(fM + weight * 9.81);
    // haltura propulsiva

    const dividendo = fRM / (weight * 9.81) - 1;

    const hP = alturaVuelo / dividendo;

    const power = parseInt((weight * 9.81 * (alturaVuelo + hP)) / tP);

    return { power, fRM };
  };
  const result = powerCMJDropAnalysis(weight, tV, result2, alturaVuelo);
  console.log(
    "result del powerjumppp",
    result,
    "distancia y tiempo prop",
    result2
  );
  console.log(
    "nuevo metodo potencia",
    power,
    "fuerza",
    fRM,
    "distancia prop",
    propulsiveDistance,
    "tiempo prpulsivo",
    propulsiveTime
  );

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
  };
}

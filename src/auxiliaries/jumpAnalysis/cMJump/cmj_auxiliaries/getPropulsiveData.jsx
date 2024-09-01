import numbers from "numbers";
import getDecreasingArray from "./getDecreasingArray";

const getPropulsiveData = (
  arrayY3,
  arrayY3T,
  velD,
  cMjumpInterv,
  arrayY13,
  arrayY13T
) => {
  // suponemos que la velocidad de despegue corresponde al 95 % de la maxima
  const velMax = (100 * velD) / 95;

  //   ----------------------------------------------fin

  // como la velocidad es maxima, la aceleración debe ser cero, entonces integramos hacia atras la aceleración partiendo como valor incial de velocidad la máxima.
  //   invertimos el array de aceleración
  //   const arrayY3Invertido = [...arrayY3].reverse();

  const retorno = getDecreasingArray(arrayY13);

  const modifiedArray = retorno.modifiedArray;

  const arrayY3Invertido = [...modifiedArray].reverse();

  const integralArray = [];
  let countDP = velMax;

  for (let i = 0; i < arrayY3Invertido.length - 1; i++) {
    countDP -=
      ((Number(arrayY3Invertido[i]) + Number(arrayY3Invertido[i + 1])) *
        cMjumpInterv) /
      2;

    integralArray.push(countDP);
  }

  // buscamos el primer indice negativo, en la app si no encuentra esto que de error

  let firstNegativeInvertidoIndex = 0;
  if (integralArray.findIndex((el) => el < 0) !== -1) {
    firstNegativeInvertidoIndex = integralArray.findIndex((el) => el < 0);
  } else {
    firstNegativeInvertidoIndex = integralArray.findIndex(
      (el) => el === Math.min(...integralArray)
    );
  }

  // filtramos solo los que son positivos antes del primer negativo
  const arrayY3InvertidoPositivo = integralArray.filter(
    (el, index) => index < firstNegativeInvertidoIndex
  );

  // tomamos el array modificado y filtramos solo las últimas aceleraciones que corresponden al length de la velocida positiva

  const modifiedArrayLength = modifiedArray.length;
  const arrayY3InvertidoPositivoLength = arrayY3InvertidoPositivo.length;

  // aceleracion propulsiva, corresponde a la parte positiva de la velocidad
  const propulsiveAccelerationArray = modifiedArray.filter(
    (acc, index) => index > modifiedArrayLength - arrayY3InvertidoPositivoLength
  );

  //   buscamos el valor medio de la aceleracion propulsiva

  const meanPropulsiveAcceleration = numbers.statistic.mean(
    propulsiveAccelerationArray
  );

  //   TIEMPO PROPULSIVO
  // corresponde al length del array invertido positivo por el intervalos. se llama propulsive max time porque es hasta la velocidad máxima teórica
  const propulsiveMaxTime = Number(
    (arrayY3InvertidoPositivo.length * cMjumpInterv).toFixed(3)
  );

  // DISTANCIA PROPULSIVA
  //   Corresponde al area del triángulo cuya base es el tiempo propulsivo y la altura es el velocidad máxima
  const propulsiveMaxDist = (propulsiveMaxTime * velMax) / 2;

  //   Mas suposiciones que no estamos utilizando, agregar un paralelepípedo al area anterior con base 3 intervalos y altura vmax y vel despegue
  const sumaVel = velMax + velD;
  const intervalo = cMjumpInterv * 3;
  const propulsiveDespDist = (sumaVel * intervalo) / 2;

  const propulsiveDistance = Number(propulsiveMaxDist.toFixed(3));

  const propulsiveTime = // intervalo +
    Number((arrayY3InvertidoPositivo.length * cMjumpInterv).toFixed(3));

  return {
    propulsiveDistance,
    propulsiveTime,
    propulsiveAccelerationArray,
    meanPropulsiveAcceleration,
    velMax,
  };
};

export default getPropulsiveData;

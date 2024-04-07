import numbers from "numbers";

const squatJumpAnalysis = (sJAccY = [], testTimeInput = 0, weight = 0) => {
  const evT = testTimeInput / 1000;
  const sJInterval = evT / sJAccY.length;

  const first50indexs = [];
  sJAccY.map((el, index) => {
    if (index < 50) {
      first50indexs.push(el);
    }
  });

  const initialMode = numbers.statistic.mode(sJAccY);
  const sJAccYY0 = sJAccY.map((el) => Number((el - initialMode) * 9.81));

  // busqueda del index 0
  const min = Math.min(...sJAccYY0);
  const minIndex = sJAccYY0.findIndex((el, index) => el === min);
  const arrayMenorMinIndex = [];

  sJAccYY0.map((el, index) => {
    if (index < minIndex) {
      arrayMenorMinIndex.push(el);
    }
  });
  const maxImpulso = Math.max(...arrayMenorMinIndex);

  const maxIndexImpulso = arrayMenorMinIndex.findIndex(
    (el) => el === maxImpulso
  );

  const index0 = arrayMenorMinIndex.findLastIndex(
    (el, index) => el < 0 && index < maxIndexImpulso
  );
  // fin index 0

  const sJAccYY1 = [];
  sJAccYY0.map((el, index) => {
    if (index > index0) {
      sJAccYY1.push(el);
    }
  });

  // index1 donde finaliza el impulso y comienza el vuelo
  const index1 = sJAccYY1.findIndex((el) => el < 0);

  // index3 donde finaliza el vuelo
  const index2 = sJAccYY1.findIndex((el, index) => el > 0 && index > index1);

  const flightTime = (index2 - index1) * sJInterval;
  const flightHeight = (1 / 8) * 9.81 * Math.pow(flightTime, 2);
  const takeoffSpeed = Math.sqrt(2 * 9.81 * flightHeight);

  // para graficar
  const finalMode = numbers.statistic.mode(sJAccYY1);
  const arrTfinal = [];
  let count = 0;
  const sJAccYFinal = [];
  const xAxis = [];
  sJAccYY1.map((el) => {
    if (el > 0.3 || el < -0.3) {
      sJAccYFinal.push(el);
      count += sJInterval;
      arrTfinal.push(Number(count.toFixed(3)));
      xAxis.push(0);
    }
  });

  return {
    sJAccYFinal,
    xAxis,
    flightTime,
    flightHeight,
    takeoffSpeed,
    sJInterval,
    arrTfinal,
  };
};
export default squatJumpAnalysis;

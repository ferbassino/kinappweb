import numbers from "numbers";

const dropJumpAnalysis = (accY = [], testTimeInput = 0, weight = 0) => {
  const evT = testTimeInput / 1000;
  const interv = evT / accY.length;

  const accYG = accY.map((el) => el * 9.81);
  const mode = numbers.statistic.mode(accYG);
  const dropJumpAccY = accY.map((el) => Number((el * 9.81 - mode).toFixed(4)));
  const initialMode = numbers.statistic.mode(dropJumpAccY);

  // index0
  const refIndex = dropJumpAccY.findIndex((el) => el < -6);

  const index0 = dropJumpAccY.findLastIndex(
    (el, index) => el > initialMode && index < refIndex
  );

  const dropJumpAccY0 = [];
  dropJumpAccY.map((el, index) => {
    if (index > index0) {
      dropJumpAccY0.push(el);
    }
  });

  // index1
  const index1 = dropJumpAccY0.findIndex((el, index) => el > 0);
  // index01 es donde comenzaria el vuelo inicial
  const index01 = dropJumpAccY0.findIndex(
    (el, index) => el < -8 && index < index1
  );

  const index2 = dropJumpAccY0.findIndex(
    (el, index) => el < 0 && index > index1
  );
  const index3 = dropJumpAccY0.findIndex(
    (el, index) => el > 0 && index > index2
  );

  // primera caida
  const flightTime1 = (index1 - index01) * interv;
  const flightHeight1 = (1 / 2) * 9.81 * Math.pow(flightTime1, 2);
  const dropSpeed = Math.sqrt(2 * 9.81 * flightHeight1);

  // tiempo de contacto

  const contactTime = (index2 - index1) * interv;

  // segunda fase aerea
  const flightTime2 = (index3 - index2) * interv;
  const flightHeight2 = (1 / 8) * 9.81 * Math.pow(flightTime2, 2);
  const takeoffSpeed2 = Math.sqrt(2 * 9.81 * flightHeight2);

  const dropJumpAccYtest = [];
  dropJumpAccY0.map((el, index) => {
    if (index >= index1) {
      dropJumpAccYtest.push(el);
    }
  });

  // para graficar
  const index4 = dropJumpAccY0.findIndex(
    (el, index) => el < 0 && index > index3
  );
  const index5 = dropJumpAccY0.findIndex(
    (el, index) => el > 0 && index > index4
  );
  const arrTF = [];
  let count = 0;
  const dropJumpAccY0F = [];
  const dropJumpXAxis = [];
  dropJumpAccY0.map((el, index) => {
    if (index <= index5) {
      count += interv;
      arrTF.push(count.toFixed(3));
      dropJumpAccY0F.push(el);
      dropJumpXAxis.push(0);
    }
  });

  return {
    dropJumpAccY0F,
    dropJumpXAxis,
    interv,
    flightTime1,
    flightHeight1,
    dropSpeed,
    contactTime,
    flightTime2,
    flightHeight2,
    takeoffSpeed2,
    arrTF,
  };
};
export default dropJumpAnalysis;

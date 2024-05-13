import numbers from "numbers";

const freeJumpAnalysis = (freeAccY = [], testTimeInput = 0, weight = 0) => {
  const evT = testTimeInput / 1000;
  const interval = evT / freeAccY.length;

  const modo = numbers.statistic.mode(freeAccY);
  const freeArrayY0 = freeAccY.map((el) => el - modo);
  const freeArrayY1 = [];

  const freeXAxis = [];
  const arrTf = [];
  let count = 0;
  freeArrayY0.map((el) => {
    if (el > 0.02 || el < -0.02) {
      freeArrayY1.push(el);

      count += interval;
      arrTf.push(count.toFixed(3));
      freeXAxis.push(0);
    }
  });

  return { freeArrayY1, freeXAxis, arrTf, interval };
};
export default freeJumpAnalysis;

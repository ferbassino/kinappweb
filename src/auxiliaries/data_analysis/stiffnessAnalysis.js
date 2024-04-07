import numbers from "numbers";

const stiffnessAnalysis = (accY = [], testTimeInput = 0, weight = 0) => {
  const modo = numbers.statistic.mode(accY);
  const arrayY0 = accY.map((el) => el - modo);
  const stiffnessInterval = testTimeInput / accY.length / 1000;
  let count = 0;
  const arrayAccTime = [];
  accY.map((el) => {
    count += testTimeInput / accY.length;
    arrayAccTime.push(count / 1000);
  });

  const arrayYCentral = [];
  const timeArrayYCentral = [];
  arrayY0.map((el, index) => {
    if (arrayAccTime[index] > 3 && arrayAccTime[index] < 10) {
      arrayYCentral.push(el);
      timeArrayYCentral.push(arrayAccTime[index]);
    }
  });
  const arrayYCentral0 = [];
  const arrayYCentral0F = [];

  let indexI = 0;
  let index0I = 0;
  arrayYCentral.map((el, index) => {
    if (arrayYCentral[0] > 0) {
      index0I = arrayYCentral.findIndex((el) => el < 0);
      if (index0I <= index) arrayYCentral0.push(el);
    }
    if (arrayYCentral[0] < 0) {
      indexI = arrayYCentral.findIndex((el) => el > 0);
    }
  });

  const arrTCentral0F = [];
  let tCount = 0;
  const stiffnessXAxis = [];
  arrayYCentral.map((el, index) => {
    if (index > indexI) {
      arrayYCentral0F.push(el);
      stiffnessXAxis.push(0);
      tCount += stiffnessInterval;
      arrTCentral0F.push(tCount.toFixed(2));
    }
  });

  index0I = arrayYCentral0F.findIndex((el, index) => el < 0);

  arrayYCentral0F.map((el, index) => {
    if (index > index0I) {
      arrayYCentral0.push(el);
    }
  });
  const index0 = 0;
  let index1 = 0;
  let index2 = 0;
  let index3 = 0;
  let index4 = 0;
  let index5 = 0;
  let index6 = 0;
  let index7 = 0;
  let index8 = 0;
  let index9 = 0;
  let index10 = 0;
  let index11 = 0;
  let index12 = 0;

  arrayYCentral0.map((el, index) => {
    index1 = arrayYCentral0.findIndex((el) => el > 0);
    index2 = arrayYCentral0.findIndex((el, index) => index > index1 && el < 0);
    index3 = arrayYCentral0.findIndex((el, index) => index > index2 && el > 0);
    index4 = arrayYCentral0.findIndex((el, index) => index > index3 && el < 0);
    index5 = arrayYCentral0.findIndex((el, index) => index > index4 && el > 0);
    index6 = arrayYCentral0.findIndex((el, index) => index > index5 && el < 0);
    index7 = arrayYCentral0.findIndex((el, index) => index > index6 && el > 0);
    index8 = arrayYCentral0.findIndex((el, index) => index > index7 && el < 0);

    index9 = arrayYCentral0.findIndex((el, index) => index > index8 && el > 0);
    index10 = arrayYCentral0.findIndex((el, index) => index > index9 && el < 0);

    index11 = arrayYCentral0.findIndex(
      (el, index) => index > index10 && el > 0
    );
    index12 = arrayYCentral0.findIndex(
      (el, index) => index > index11 && el < 0
    );
  });

  const tV01 = (index1 - index0) * stiffnessInterval;
  const tC12 = (index2 - index1) * stiffnessInterval;

  const tV23 = (index3 - index2) * stiffnessInterval;
  const tC34 = (index4 - index3) * stiffnessInterval;

  const tV45 = (index5 - index4) * stiffnessInterval;
  const tC56 = (index6 - index5) * stiffnessInterval;

  const tV67 = (index7 - index6) * stiffnessInterval;
  const tC78 = (index8 - index7) * stiffnessInterval;

  const tV89 = (index9 - index8) * stiffnessInterval;
  const tC910 = (index10 - index9) * stiffnessInterval;

  const tV1011 = (index11 - index10) * stiffnessInterval;
  const tC1112 = (index12 - index11) * stiffnessInterval;

  const tC = (tC34 + tC56 + tC78 + tC910 + tC1112) / 5;
  const tV = (tV23 + tV45 + tV67 + tV89 + tV1011) / 5;

  const frequency = 1 / (tC + tV);

  const a = weight * Math.PI * (tV + tC);
  const b = Math.pow(tC, 2);
  const c = (tC + tV) / Math.PI;
  const d = tC / 4;

  const stiffness = parseInt(a / (b * (c + d)));

  const stiffnessData = {
    tC34,
    tC56,
    tC78,
    tC910,
    tC1112,
    tV23,
    tV45,
    tV67,
    tV89,
    tV1011,
    stiffness,
    frequency,
  };

  const indexValidation =
    index0 < index1 &&
    index1 < index2 &&
    index2 < index3 &&
    index3 < index4 &&
    index4 < index5 &&
    index5 < index6 &&
    index6 < index7 &&
    index7 < index8 &&
    index8 < index9 &&
    index9 < index10 &&
    index10 < index11 &&
    index11 < index12;

  return {
    stiffnessData,
    arrayYCentral,
    arrayYCentral0F,
    stiffnessXAxis,
    arrayYCentral0,
    accY,
    arrayAccTime,
    indexValidation,
    stiffnessInterval,
    arrTCentral0F,
  };
};

export default stiffnessAnalysis;

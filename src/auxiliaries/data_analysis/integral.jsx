const integralFunction = (array, interval, accT, velD) => {
  const integral = [];
  let count = velD;
  for (let i = 0; i < array.length - 1; i++) {
    count -=
      ((Number(array[i]) + Number(array[i + 1])) * (accT[i + 1] - accT[i])) / 2;

    integral.push(count);
  }

  return integral;
};

export default integralFunction;

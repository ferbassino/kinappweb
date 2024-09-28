const getForceCorrectionIndex = (number) => {
  let index = 0;

  if (number < 0.26) {
    index = 1.16;
  }
  if (number >= 0.2 && number <= 0.4) {
    let count = 1.16;

    for (let index = 0; index < (number - 0.26) * 100; index++) {
      count -= 0.00925;
    }
    index = count;
  }

  if (number > 0.37) {
    index = 1.05;
  }

  return index;
};
export default getForceCorrectionIndex;

const getForceCorrectionIndex = (number) => {
  let index = 0;
  if (number > 0.4) {
    index = 1.135;
  }
  if (number <= 0.4 && number >= 0.15) {
    index = 0.99 + (number - 0.15) * 0.63;
  }
  if (number < 0.15) {
    index = 0.99;
  }

  return index;
};
export default getForceCorrectionIndex;

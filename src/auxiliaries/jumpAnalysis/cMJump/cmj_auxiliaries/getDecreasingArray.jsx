function getDecreasingArray(arr) {
  if (arr.length === 0) {
    return arr; // Retorna el array vacío si no tiene elementos
  }

  const negativeArray = arr.filter((el) => el < 0);
  const positiveArray = arr.filter((el) => el > 0);
  const maxAcc = Math.max(...positiveArray);
  const index0 = negativeArray.length / 2;
  const index1 = negativeArray.length + positiveArray.length / 2;

  const halfArray = arr.filter((el, index) => index > index0 && index < index1);

  const modifiedArray = [];
  let count = maxAcc;
  const interval = maxAcc / halfArray.length;
  arr.map((el, index) => {
    if (index > index0 && index < index1) {
      modifiedArray.push(el + (count -= interval));
    } else {
      modifiedArray.push(el);
    }
  });

  const newPositiveArray = [];
  modifiedArray.map((el) => {
    if (el > 0) {
      newPositiveArray.push(el);
    }
  });

  return { modifiedArray, newPositiveArray };
}

export default getDecreasingArray;

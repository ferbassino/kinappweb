const getDate = (evaluationDate) => {
  const date = new Date();

  return date.toLocaleDateString();
};

export default getDate;

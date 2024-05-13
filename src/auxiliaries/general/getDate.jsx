const getDate = (evaluationDate) => {
  const res = new Date(evaluationDate);
  const date = res.toLocaleDateString();

  return date;
};

export default getDate;

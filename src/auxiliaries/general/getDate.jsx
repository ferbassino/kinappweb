const getDate = (evaluationDate) => {
  const res = new Date(evaluationDate);
  const date = res.toLocaleDateString();

  return date;
};

export const getTime = (evaluationDate) => {
  const res = new Date(evaluationDate);
  const time = res.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return time;
};

export default getDate;

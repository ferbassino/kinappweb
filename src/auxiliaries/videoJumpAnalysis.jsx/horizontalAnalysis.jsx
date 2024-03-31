const horizontalAnalysis = (rawData) => {
  const data = rawData.split("\n").slice(1);
  const rows = data.map((el) => el.split(";"));
  rows.pop();

  const time = [];
  const trocanter = [];
  const condilo = [];
  const maleolo = [];
  const calcaneo = [];
  const quintoM = [];
  rows.map((el) => {
    time.push(Number(el[0]));
    trocanter.push(Number(el[1].replace(",", ".")));
    condilo.push(Number(el[2].replace(",", ".")));
    maleolo.push(Number(el[3].replace(",", ".")));
    calcaneo.push(Number(el[4].replace(",", ".")));
    quintoM.push(Number(el[5].replace(",", ".")));
  });
  return { time, trocanter, condilo, maleolo, calcaneo, quintoM };
};
export default horizontalAnalysis;

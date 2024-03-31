const verticalAnalysis = (rawData) => {
  //generamos un array separando por saltos de linea y eliminamos la primera hilera
  const data = rawData.split("\n").slice(1);
  // obtenemos cada columna separando por ";", [0]: tiempo, [1]: verticalTrocanter, [2]:verticalCondilo, [3]:verticalMaleolo,[4]:verticalCalcaneo,[5]:quinto metatarsiano
  const rows = data.map((el) => el.split(";"));
  // eliminamos el ultimo elemento que está vacio y nos da error
  rows.pop();
  // generamos los arrays de cada marcador, y reemplazamos las comas por los puntos
  const verticalTime = [];
  const verticalTrocanter = [];
  const verticalCondilo = [];
  const verticalMaleolo = [];
  const verticalCalcaneo = [];
  const verticalQuintoM = [];

  rows.map((el) => {
    verticalTime.push(Number(el[0]));
    verticalTrocanter.push(Number(el[1].replace(",", ".")));
    verticalCondilo.push(Number(el[2].replace(",", ".")));
    verticalMaleolo.push(Number(el[3].replace(",", ".")));
    verticalCalcaneo.push(Number(el[4].replace(",", ".")));
    verticalQuintoM.push(Number(el[5].replace(",", ".")));
  });

  return {
    verticalTime,
    verticalTrocanter,
    verticalCondilo,
    verticalMaleolo,
    verticalCalcaneo,
    verticalQuintoM,
  };
};

export default verticalAnalysis;

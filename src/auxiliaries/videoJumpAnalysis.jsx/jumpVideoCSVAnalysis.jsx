const jumpVideoCSVAnalysis = (verticalString, horizontalString) => {
  const verticalData = verticalString.split("\n").slice(1);
  const verticalRows = verticalData.map((el) => el.split(";"));
  verticalRows.pop();

  const verticalTimeArr = [];
  const verticalTrocanterArray = [];
  const verticalCondiloArray = [];
  const verticalMaleoloArray = [];
  const verticalCalcaneoArray = [];
  const verticalQuintoMArray = [];

  verticalRows.map((el) => {
    verticalTimeArr.push(Number(el[0]));
    verticalTrocanterArray.push(Number(el[1].replace(",", ".")));
    verticalCondiloArray.push(Number(el[2].replace(",", ".")));
    verticalMaleoloArray.push(Number(el[3].replace(",", ".")));
    verticalCalcaneoArray.push(Number(el[4].replace(",", ".")));
    verticalQuintoMArray.push(Number(el[5].replace(",", ".")));
  });

  const horizontalData = horizontalString.split("\n").slice(1);
  const horizontalRows = horizontalData.map((el) => el.split(";"));
  horizontalRows.pop();

  const horizontalTimeArray = [];
  const horizontalTrocanterArray = [];
  const horizontalCondiloArray = [];
  const horizontalMaleoloArray = [];
  const horizontalCalcaneoArray = [];
  const horizontalQuintoMArray = [];

  horizontalRows.map((el) => {
    horizontalTimeArray.push(Number(el[0]));
    horizontalTrocanterArray.push(Number(el[1].replace(",", ".")));
    horizontalCondiloArray.push(Number(el[2].replace(",", ".")));
    horizontalMaleoloArray.push(Number(el[3].replace(",", ".")));
    horizontalCalcaneoArray.push(Number(el[4].replace(",", ".")));
    horizontalQuintoMArray.push(Number(el[5].replace(",", ".")));
  });

  const trocanterArr = [];
  const condiloArr = [];
  const maleoloArr = [];
  const calcaneoArr = [];
  const quintoMArr = [];
  verticalTrocanterArray.map((el, index) => {
    trocanterArr.push([
      verticalTrocanterArray[index],
      horizontalTrocanterArray[index],
    ]);
    condiloArr.push([
      verticalCondiloArray[index],
      horizontalCondiloArray[index],
    ]);
    maleoloArr.push([
      verticalMaleoloArray[index],
      horizontalMaleoloArray[index],
      [index],
    ]);
    calcaneoArr.push([
      verticalCalcaneoArray[index],
      horizontalCalcaneoArray[index],
      [index],
    ]);
    quintoMArr.push([
      verticalQuintoMArray[index],
      horizontalQuintoMArray[index],
    ]);
  });

  // declaramos 3 arrays de  vectores, t para muslo, l para pierna y f para pie

  const tArray = [];
  const lArray = [];
  const fArray = [];

  // t se forma con los puntos de trocanter y condilo
  // l se forma con el de condilo y maleolo
  // f se forma con el de maleolo y pie
  trocanterArr.map((el, index) => {
    tArray.push([
      condiloArr[index][1] - trocanterArr[index][1],
      condiloArr[index][0] - trocanterArr[index][0],
    ]);

    lArray.push([
      condiloArr[index][1] - maleoloArr[index][1],
      condiloArr[index][0] - maleoloArr[index][0],
    ]);
    fArray.push([
      quintoMArr[index][1] - maleoloArr[index][1],
      quintoMArr[index][0] - maleoloArr[index][0],
    ]);
  });

  // producto vectorial
  const dotProductTL = [];
  const dotProductLF = [];

  tArray.map((el, index) => {
    dotProductTL.push(
      tArray[index][0] * lArray[index][0] + tArray[index][1] * lArray[index][1]
    );
    dotProductLF.push(
      lArray[index][0] * fArray[index][0] + lArray[index][1] * fArray[index][1]
    );
  });

  //producto de los modulos
  const tModule = [];
  const lModule = [];
  const fModule = [];
  tArray.map((el, index) => {
    tModule.push(
      Math.sqrt(Math.pow(tArray[index][0], 2) + Math.pow(tArray[index][1], 2))
    );

    lModule.push(
      Math.sqrt(Math.pow(lArray[index][0], 2) + Math.pow(lArray[index][1], 2))
    );
    fModule.push(
      Math.sqrt(Math.pow(fArray[index][0], 2) + Math.pow(fArray[index][1], 2))
    );
  });

  const moduleTLProduct = [];
  const moduleLFProduct = [];
  tModule.map((el, index) => {
    moduleTLProduct.push(tModule[index] * lModule[index]);
    moduleLFProduct.push(lModule[index] * fModule[index]);
  });

  const kneeAngleArr = [];
  const ankleAngleArr = [];

  moduleTLProduct.map((el, index) => {
    kneeAngleArr.push(
      (Math.acos(dotProductTL[index] / moduleTLProduct[index]) * 180) / Math.PI
    );
    ankleAngleArr.push(
      (Math.acos(dotProductLF[index] / moduleLFProduct[index]) * 180) / Math.PI
    );
  });

  return {
    kneeAngleArr,
    ankleAngleArr,
    verticalTimeArr,
  };
};

export default jumpVideoCSVAnalysis;

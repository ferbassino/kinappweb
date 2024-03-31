const verticalHorizontalAnalysis = (
  verticalTrocanterArray,
  trocanter,
  verticalCondiloArray,
  condilo,
  verticalMaleoloArray,
  maleolo,
  verticalCalcaneoArray,
  calcaneo,
  verticalQuintoMArray,
  quintoM
) => {
  // generamos arrais para cada marcador con las dos coordenadas
  const trocanterArr = [];
  const condiloArr = [];
  const maleoloArr = [];
  const calcaneoArr = [];
  const quintoMArr = [];
  verticalTrocanterArray.map((el, index) => {
    trocanterArr.push([verticalTrocanterArray[index], trocanter[index]]);
    condiloArr.push([verticalCondiloArray[index], condilo[index]]);
    maleoloArr.push([verticalMaleoloArray[index], maleolo[index]]);
    calcaneoArr.push([verticalCalcaneoArray[index], calcaneo[index]]);
    quintoMArr.push([verticalQuintoMArray[index], quintoM[index]]);
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

  const kneeAngle = [];
  const ankleAngle = [];

  moduleTLProduct.map((el, index) => {
    kneeAngle.push(
      (Math.acos(dotProductTL[index] / moduleTLProduct[index]) * 180) / Math.PI
    );
    ankleAngle.push(
      (Math.acos(dotProductLF[index] / moduleLFProduct[index]) * 180) / Math.PI
    );
  });
  return {
    kneeAngle,
    ankleAngle,
    trocanterArr,
    condiloArr,
    maleoloArr,
    calcaneoArr,
    quintoMArr,
  };
};
export default verticalHorizontalAnalysis;

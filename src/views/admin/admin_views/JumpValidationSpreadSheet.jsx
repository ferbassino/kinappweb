import React, { useState, useEffect, useContext, useRef } from "react";
import getDate, { getTime } from "../../../auxiliaries/general/getDate";
import { testsContext } from "../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import "./Tests.css";
import accelerationArrays from "../../../auxiliaries/basics/accelerationArrays";
import { getJumpValidationClients } from "../../../services/clientServices";
import { getTestsByIds } from "../../../services/testsServices";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { HyperFormula } from "hyperformula";
import "handsontable/dist/handsontable.full.min.css";

const JumpValidationSpreadSheet = () => {
  const navigate = useNavigate();
  const hotTableComponent = useRef(null);
  const hotTableComponentM = useRef(null);
  const {
    handleCurrentTest,
    currentClient,
    handleCurrentClientJumpNumber,
    testsToSpreadSheet,
    testsToSpreadSheetM,
  } = useContext(testsContext);

  const [testVisibles, setTestVisibles] = useState(true);
  const [noTestsVisible, setNoTestsVisible] = useState(false);

  const downloadFile = () => {
    const downloadPlugin =
      hotTableComponent.current.hotInstance.getPlugin("exportFile");

    downloadPlugin.downloadFile("csv", {
      filename: `${currentClient.email}_jumps`,
      fileExtension: "csv",
      MimeTypeArray: "text/csv",
      columnHeaders: true,
    });
  };

  const hyperformulaInstance = HyperFormula.buildEmpty({
    licenseKey: "internal-use-in-handsontable",
  });
  return (
    <>
      <header>
        <Navbar />
      </header>

      <h1 className="tests-title">Saltos de {currentClient.email}</h1>
      <div
        style={{
          width: "100%",
          height: "20vh",
          boxSizing: "border-box",
          marginLeft: "3rem",
        }}
      >
        <button onClick={() => downloadFile()}>Descargar Archivo</button>
        <HotTable
          ref={hotTableComponent}
          data={testsToSpreadSheet}
          licenseKey="non-commercial-and-evaluation"
          colHeaders={true}
          rowHeaders={true}
          columnSorting={true}
          contextMenu={true}
          readOnly={true}
          manualRowMove={true}
          headerClassName="custom-header"
          fillHandle={true}
          formulas={{
            engine: hyperformulaInstance,
            sheetName: "Sheet1",
          }}
        >
          <HotColumn data="index" title="salto" />
          <HotColumn data="propulsiveDistance" title="DP [m]" />
          <HotColumn data="propulsiveTime" title="TP [s]" />
          <HotColumn data="fRM" title="FM [N]" />
          <HotColumn data="power" title="PM [N]" />
          <HotColumn data="velD" title="VD [m/s]" />
          <HotColumn data="tV" title="TV [s]" />
          <HotColumn data="alturaVuelo" title="AV [m]" />
          <HotColumn data="cMjumpInterv" title="IM [s]" />
        </HotTable>
      </div>

      {noTestsVisible ? (
        <>
          <div className="">
            <div className="">
              <h1 className="">
                Todavía no se registraron evaluaciones en tu perfil
              </h1>
            </div>
          </div>
        </>
      ) : null}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default JumpValidationSpreadSheet;

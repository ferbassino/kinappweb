import React, { useState, useEffect } from "react";
import ReactFileReader from "react-file-reader";
import { json, useNavigate } from "react-router-dom";
import useDrivePicker from "react-google-drive-picker";
import { useLogin } from "../../context/LoginProvider";
import Chart from "../../components/otros/Chart";
import squatJumpAnalysis from "../../auxiliaries/data_analysis/squatJumpAnalysis";
import JumpResult from "../../components/jump/JumpResult";
import InputButton from "../../components/general/InputButton";

const ImuAnalysis = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const { profile } = useLogin();
  const [dataobj, setDataObj] = useState({});
  const [analysisVisible, setAnalysisVisible] = useState(false);
  const [inputVisible, setInputVisible] = useState(true);
  // google drive picker
  const [openPicker, authResponse] = useDrivePicker();
  const [accY, setAccY] = useState([]);
  const [jumpDataObj, setJumpDataObj] = useState({
    accY: [],
    testTimeInput: 0,
    weight: 0,
    motionType: "",
  });

  const handlePicker = () => {
    openPicker({
      clientId:
        "322607696673-51vfb9s6ovm3skes3ipaq48c8log2kv0.apps.googleusercontent.com",
      developerKey: "AIzaSyAGXButC9zjOlNkGdANBzb9nC4qHjPvs9E",
      viewId: "DOCS",
      token:
        "ya29.a0AXooCgsRDO2O7WUFCK9C8pu0CH2KfdNAUxasM_mg372dC1HORIg7eBG6kr5M8MuAv1uXZgMz8IJvZcUlrZD1tCzmJPDTpzXss7ddyuDNpIoWUAlwRGPVo-w_TaSZbcQ32LcABZNfSS1g0unYrHfnKubvtsFXAjJgL1b7aCgYKAR4SARESFQHGX2MiLuAzZ_fvy_CNbkjjuQtDIQ0171",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      // multiselect:true,
      callbackFunction: async (data) => {
        // console.log("data del drive", data);
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        const file = data.target.files[0];
        if (!file) return;

        try {
          const text = await file.text();
          // setFileContent(text);
          console.log("Contenido del archivo:", text);
        } catch (error) {
          console.error("Error al leer el archivo:", error);
        }
      },
    });
  };
  const handleFiles = (files) => {
    // console.log(files[0]);
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;
      const dataObj = JSON.parse(data);
      console.log(dataObj);
      setDataObj(dataObj);
      const accY0 = dataObj.stringAccY.split(",");
      accY0.shift();
      accY0.pop();
      const accY = [];
      accY0.map((el) => accY.push(Number(el)));
      console.log("jumptype", dataObj.jumpType);
      setJumpDataObj({
        accY: accY,
        testTime: dataObj.testTimeInput,
        weight: dataObj.weight,
        jumpType: dataObj.jumpType,
      });
      setAnalysisVisible(true);
      setInputVisible(false);
      // console.log(sJAccYFinal);
    };
    reader.readAsText(files[0]);
  };
  // const uploadVerticalFile = (file) => {
  //   if (file[0].type === "text/csv") {
  //     let read = new FileReader();
  //     read.onload = function (e) {
  //       const rawData = read.result;
  //       const verticalData = rawData.split("\n").slice(1);
  //       const verticalRows = verticalData.map((el) => el.split(";"));
  //       verticalRows.pop();
  //     };
  //     read.readAsText(file[0]);
  //   }
  // };

  const handleTestVisible = () => {
    setAnalysisVisible(false);
    setInputVisible(true);
  };
  return (
    <div>
      <button onClick={() => handlePicker()}>Vertical</button>
      {inputVisible ? (
        <>
          <ReactFileReader handleFiles={handleFiles} fileTypes={".txt"}>
            <InputButton text={"cargar archivo"} />
          </ReactFileReader>
        </>
      ) : null}
      {analysisVisible ? (
        <>
          <JumpResult
            accY={jumpDataObj.accY}
            testTime={jumpDataObj.testTime}
            weight={jumpDataObj.weight}
            motionType={jumpDataObj.jumpType}
            handleTestVisible={handleTestVisible}
          />
        </>
      ) : null}
    </div>
  );
};

export default ImuAnalysis;

import React, { useState, useEffect } from "react";
import ReactFileReader from "react-file-reader";
import { json, useNavigate } from "react-router-dom";
import useDrivePicker from "react-google-drive-picker";
import { useLogin } from "../../context/LoginProvider";
import Chart from "../../components/otros/Chart";

const ImuAnalysis = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const { profile } = useLogin();
  const [dataobj, setDataObj] = useState({});
  // google drive picker
  const [openPicker, authResponse] = useDrivePicker();
  const [accY, setAccY] = useState([]);

  const handlePicker = () => {
    openPicker({
      clientId:
        "322607696673-51vfb9s6ovm3skes3ipaq48c8log2kv0.apps.googleusercontent.com",
      developerKey: "AIzaSyAGXButC9zjOlNkGdANBzb9nC4qHjPvs9E",
      viewId: "DOCS",
      // token:
      //   "ya29.a0AXooCgsRDO2O7WUFCK9C8pu0CH2KfdNAUxasM_mg372dC1HORIg7eBG6kr5M8MuAv1uXZgMz8IJvZcUlrZD1tCzmJPDTpzXss7ddyuDNpIoWUAlwRGPVo-w_TaSZbcQ32LcABZNfSS1g0unYrHfnKubvtsFXAjJgL1b7aCgYKAR4SARESFQHGX2MiLuAzZ_fvy_CNbkjjuQtDIQ0171",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      // multiselect:true,
      callbackFunction: (data) => {
        console.log("data del drive", data);
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        const file = data.docs[0];
        console.log(data.docs[0]);
        // if (!file) {
        //   return;
        // }
        const reader = new FileReader();
        reader.onload = function (e) {
          const data = e.target.result;
          console.log("data", data);
        };
        reader.readAsText(file);
      },
    });
  };
  const handleFiles = (files) => {
    console.log("files del react fl", files[0]);
    // console.log(files[0]);
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;
      const dataObj = JSON.parse(data);
      console.log(dataObj);
      setDataObj(dataObj);
      // console.log(dataObj.stringAccY);
      setAccY(JSON.parse(dataObj.stringAccY));
      // console.log("accY", accY);
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
  return (
    <div>
      <div>
        <button onClick={() => handlePicker()}>drive</button>
      </div>

      <button onInput={handleFiles}>device</button>
      <ReactFileReader handleFiles={handleFiles} fileTypes={".txt"}>
        <button>local</button>
      </ReactFileReader>
      <p>{dataobj.date}</p>
      <p>{dataobj.email}</p>
      <p>{dataobj.jumpType}</p>
      <p>{dataobj.testTimeInput}</p>
      <p>{dataobj.weight}</p>
      <p>{dataobj.stringAccY}</p>
      <Chart x={accY} y={accY} />
    </div>
  );
};

export default ImuAnalysis;

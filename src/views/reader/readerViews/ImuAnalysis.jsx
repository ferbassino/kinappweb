import React, { useState, useEffect, useContext } from "react";
import ReactFileReader from "react-file-reader";
import { useNavigate } from "react-router-dom";
import { testsContext } from "../../../context/TestsContext";
import JumpView from "../../testsView/JumpView";
import Navbar from "../../../components/landing/header/Navbar";
import Footer from "../../../components/landing/footer/Footer";
import CustomButton from "../../../components/basics/CustomButton";
import "./ImuAnalysis.css";
const ImuAnalysis = () => {
  const { handleCurrentTest, currentTest } = useContext(testsContext);
  const navigate = useNavigate();

  const [analysisVisible, setAnalysisVisible] = useState(false);
  const [inputVisible, setInputVisible] = useState(true);
  // google drive picker

  const [accY, setAccY] = useState([]);
  const [jumpDataObj, setJumpDataObj] = useState({
    accY: [],
    testTimeInput: 0,
    weight: 0,
    motionType: "",
  });

  const handleFiles = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;
      const dataObj = JSON.parse(data);

      const accY0 = dataObj.stringAccY.split(",");
      accY0.shift();
      accY0.pop();
      const accY = [];
      accY0.map((el) => accY.push(Number(el)));

      const dataObject = {
        accY: accY,
        testTime: dataObj.testTimeInput,
        weight: dataObj.weight,
        motionType: dataObj.motionType,
        date: dataObj.date,
        email: dataObj.email,
      };
      handleCurrentTest(dataObject);
      navigate("/jump_view");
      setAnalysisVisible(true);
      setInputVisible(false);
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
  const handleHome = () => {
    navigate("/reader_profile");
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="imu-container">
        <h1 className="imu-title">Presionar "cargar"para subir un archivo</h1>
        <p className="imu-text">
          Solo se podran subir archivos exportados desde la aplicación "jump" de
          kinApp
        </p>
        <div className="imu-button">
          <ReactFileReader handleFiles={handleFiles} fileTypes={".txt"}>
            <div className="centered-button-container">
              <CustomButton text="Cargar" />
            </div>
          </ReactFileReader>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ImuAnalysis;

import React, { useState, useEffect } from "react";
import ReactFileReader from "react-file-reader";
import { useNavigate } from "react-router-dom";
import Chart from "../../../components/basics/Chart";
import InputForm from "../../../components/video_jump_analysis/InputForm";
import jumpVideoCSVAnalysis from "../../../auxiliaries/video_analysis/jumpVideoCSVAnalysis";
import generatePassword from "../../../auxiliaries/basics/generatePassword";
import ClientInitialDataInput from "../../../components/video_jump_analysis/ClientInnitialDataInput";
import Navbar from "../../../components/landing/header/Navbar";
// import getUserClients from "./../../requests/clients/getUserClients";
// import ClientDataInput from "../../components/VideoAnalysis.jsx/ClientDataInput";
// import OldClientDataInput from "../../components/VideoAnalysis.jsx/OldClientDataInput";
// import client from "../../api/client";
// import Message from "../../components/general/Message";
import "./JumpVideoAnalysis.css";
import Footer from "../../../components/landing/footer/Footer";

const JumpVideoAnalysis = () => {
  const navigate = useNavigate();

  const [verticalTimeArray, setVerticalTimeArray] = useState([]);

  const [kneeAngle, setKneeAngle] = useState([]);
  const [ankleAngle, setAnkleAngle] = useState([]);

  const [inputFormVisible, setInputFormVisible] = useState(false);
  const [newClientFormVisible, setNewClientFormVisible] = useState(false);
  const [newClientArray, setNewClientArray] = useState(false);
  const [oldClientFormVisible, setOldClientFormVisible] = useState(false);
  const [oldClientArray, setOldClientArray] = useState(false);
  const [email, setEmail] = useState("");
  const [currentClient, setCurrentClient] = useState([]);
  const [hipAngleArray, sethipAngleArray] = useState([]);
  const [clientDataInputVisible, setClientDataInputVisible] = useState(false);
  const [oldClientDataInputVisible, setOldClientDataInputVisible] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [verticalButtonVisible, setVerticalButtonVisible] = useState(false);
  const [horizontalButtonVisible, setHorizontalButtonVisible] = useState(false);
  const [analysisVisible, setAnalysisVisible] = useState(false);
  const [resetearVisible, setResetearVisible] = useState(false);
  const [analizarVisible, setAnalizarVisible] = useState(false);
  const [clientInnitialDataInputVisible, setClientInnitialDataInputVisible] =
    useState(false);

  const [birthDate, setbirthDaste] = useState(new Date());
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [refDistance, setRefDistance] = useState("");
  const [videoFrameRate, setVideoFrameRate] = useState("");
  const [gender, setGender] = useState("");
  const [pALevel, setPALevel] = useState("");
  const [mFComponents, setMFComponents] = useState("");
  const [mPActivity, setMPActivity] = useState("");
  const [pAType, setPAType] = useState("");
  const [roles, setRoles] = useState("");
  const [userId, setUserId] = useState("");
  const [verticalString, setVerticalString] = useState("");
  const [horizontalString, setHorizontalString] = useState("");
  const [password, setPassword] = useState("");
  // mensaje
  const [messageVisible, setMessageVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [subTitle, setSubTitle] = useState("");

  // validación

  const uploadVerticalFile = (file) => {
    if (file[0].type === "text/csv") {
      let read = new FileReader();
      read.onload = function (e) {
        const rawData = read.result;
        const verticalData = rawData.split("\n").slice(1);
        const verticalRows = verticalData.map((el) => el.split(";"));
        verticalRows.pop();

        if (verticalRows[0].length === 6) {
          setVerticalButtonVisible(false);
          setHorizontalButtonVisible(true);
          setVerticalString(rawData);
        } else {
          setMessageVisible(true);
          setTitle("Error en la lectura del archivo csv");
          setSubTitle(
            `El archivo debe contener datos de los cinco marcadores (trocanter, cóndilo femoral, maleolo peroneo, calcáneo y quinto metatarsiano) y del intervalo de tiempo, asegúrese de estar cargando el archivo correcto o de que el procedimiento de registro y guardado sea el adecuado`
          );
          setTimeout(() => {
            setMessageVisible(false);
            setTitle("");
            setSubTitle("");
          }, 7000);
        }
      };
      read.readAsText(file[0]);
    } else {
      setMessageVisible(true);
      setTitle("El archivo de datos verticales debe ser con extensión .csv");
      setTimeout(() => {
        setMessageVisible(false);
        setTitle("");
      }, 5000);
    }
  };

  const uploadHorizontalFile = (file) => {
    if (file[0].type === "text/csv") {
      let read = new FileReader();
      read.onload = function (e) {
        const rawData = read.result;
        const verticalData = rawData.split("\n").slice(1);
        const verticalRows = verticalData.map((el) => el.split(";"));
        verticalRows.pop();

        if (verticalRows[0].length === 6) {
          setHorizontalButtonVisible(false);
          setClientInnitialDataInputVisible(true);
          setAnalizarVisible(true);
          setHorizontalString(rawData);
        } else {
          setMessageVisible(true);
          setTitle("Error en la lectura del archivo csv");
          setSubTitle(
            `El archivo debe contener datos de los cinco marcadores (trocanter, cóndilo femoral, maleolo peroneo, calcáneo y quinto metatarsiano) y del intervalo de tiempo, asegúrese de estar cargando el archivo correcto o de que el procedimiento de registro y guardado sea el adecuado`
          );
          setTimeout(() => {
            setMessageVisible(false);
            setTitle("");
            setSubTitle("");
          }, 7000);
        }
      };
      read.readAsText(file[0]);
    } else {
      setMessageVisible(true);
      setTitle("El archivo de datos verticales debe ser con extensión .csv");
      setTimeout(() => {
        setMessageVisible(false);
        setTitle("");
      }, 5000);
    }
  };

  // const jumpVideoCSVAnalysisFunction = () => {
  //   if (
  //     weight === "" ||
  //     size === "" ||
  //     videoFrameRate === "" ||
  //     refDistance === ""
  //   ) {
  //     alert("Todos los campos deben estar completos");
  //   } else {
  //     const { hipAngleArr, kneeAngleArr, ankleAngleArr, verticalTimeArr } =
  //       jumpVideoCSVAnalysis(verticalString, horizontalString);
  //     sethipAngleArray(hipAngleArr);
  //     setKneeAngle(kneeAngleArr);
  //     setAnkleAngle(ankleAngleArr);
  //     setVerticalTimeArray(verticalTimeArr);
  //     setAnalizarVisible(false);
  //     setAnalysisVisible(true);
  //     setClientInnitialDataInputVisible(false);
  //   }
  // };
  const jumpVideoCSVAnalysisFunction = () => {
    const { hipAngleArr, kneeAngleArr, ankleAngleArr, verticalTimeArr } =
      jumpVideoCSVAnalysis(verticalString, horizontalString);
    sethipAngleArray(hipAngleArr);
    setKneeAngle(kneeAngleArr);
    setAnkleAngle(ankleAngleArr);
    setVerticalTimeArray(verticalTimeArr);
    setAnalizarVisible(false);
    setAnalysisVisible(true);
    setClientInnitialDataInputVisible(false);
  };

  // const getCurrentUserClient = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await getUserClients(profile.id);
  //     console.log("response.currenticlients", response.currentUserClients);
  //     if (response.success) {
  //       if (response.currentUserClients.length > 0) {
  //         console.log("email", email);
  //         const currClient = response.currentUserClients.filter(
  //           (client) => client.email === email
  //         );
  //         if (currClient.length > 0) {
  //           setCurrentClient(currClient);
  //           setLoading(false);
  //         } else if (currClient.length === 0) {
  //           setClientDataInputVisible(true);
  //           setLoading(false);
  //         } else {
  //           setMessageVisible(true);
  //           scrollToTop();
  //           setTitle("Ocurrió un error");
  //           setSubTitle("vuelva a ingresar el email");
  //           setTimeout(() => {
  //             setMessageVisible(false);
  //             setTitle("");
  //             setSubTitle("");
  //             setEmail("");
  //           }, 5000);
  //         }
  //       } else {
  //         alert("no se encontraron registros para ese paciente");
  //       }
  //     } else {
  //       setLoading(false);
  //       scrollToTop();
  //       setMessageVisible(true);
  //       setTitle("Ocurrió un error");
  //       setSubTitle("vuelva a ingresar el email");
  //       setTimeout(() => {
  //         setMessageVisible(false);
  //         setTitle("");
  //         setSubTitle("");
  //         setEmail("");
  //       }, 5000);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     scrollToTop();
  //     console.log(error);
  //     setMessageVisible(true);
  //     setTitle("Ocurrió un error");
  //     setSubTitle("vuelva a intentarlo mas tarde");
  //     setTimeout(() => {
  //       setMessageVisible(false);
  //       setTitle("");
  //       setSubTitle("");
  //       setEmail("");
  //       navigate("/userJC24Profile");
  //     }, 5000);
  //   }
  // };

  // const handleSubmit = () => {
  //   getCurrentUserClient();
  // };

  const handleInnit = () => {
    setResetearVisible(true);
    setVerticalButtonVisible(true);
  };
  const handleReset = () => {
    setResetearVisible(false);
    setVerticalButtonVisible(false);
    setHorizontalButtonVisible(false);
    setAnalysisVisible(false);
    setInputFormVisible(false);
    setClientDataInputVisible(false);
    setVerticalTimeArray([]);
    setKneeAngle([]);
    setAnkleAngle([]);
    setNewClientFormVisible(false);
    setNewClientArray(false);
    setOldClientArray(false);
    setEmail("");
    setCurrentClient([]);
    setOldClientFormVisible(false);
    setOldClientDataInputVisible(false);
    setSize("");
    setWeight("");
    setRefDistance("");
    setVideoFrameRate("");
    setGender("");
    setPALevel("");
    setMFComponents("");
    setMPActivity("");
    setPAType("");
    setRoles("");
    setVerticalString("");
    setHorizontalString("");
    setPassword("");
    setMessageVisible(false);
    setTitle("");
    setError("");
    setSubTitle("");
    setAnalizarVisible(false);
    setClientInnitialDataInputVisible(false);
  };

  // useEffect(() => {
  //   const pass = generatePassword();
  //   setPassword(pass);
  //   setUserId(profile.id);
  // }, []);

  // const dataObj = {
  //   kinoveaData: [verticalString, horizontalString],
  //   testTime: 0,
  //   videoFrameRate,
  //   motionType: "kinoveaJump",
  //   weight,
  //   refDistance,
  // };

  // const dataClientObj = {
  //   email,
  //   password,
  //   birthDate,
  //   size,
  //   gender: gender,
  //   userId,
  // };
  // const handleDataInputSubmit = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await client.post("/api/client/create", dataClientObj);
  //     if (response.data.success) {
  //       const dataMovObj = {
  //         email,
  //         motionType: dataObj.motionType,
  //         kinoveaData: dataObj.kinoveaData,
  //         videoFrameRate: dataObj.videoFrameRate,
  //         refDistance: dataObj.refDistance,
  //         weight: dataObj.weight,
  //         size: response.data.savedClient.size,
  //         gender: response.data.savedClient.gender,
  //         pALevel: pALevel,
  //         mPActivity: mPActivity,
  //         mFComponents: mFComponents,
  //         age: 51,
  //         userId: userId,
  //         clientId: response.data.savedClient._id,
  //       };

  //       if (dataMovObj) {
  //         const res = await client.post("/api/motion/create", dataMovObj);
  //         if (res.data.success) {
  //           scrollToTop();
  //           setMessageVisible(true);
  //           setTitle("¡Los datos se guardaron con éxito!");
  //           setSubTitle("Podran ser visualizados en el panel de evaluaciones");
  //           setTimeout(() => {
  //             setMessageVisible(false);
  //             setTitle("");
  //             setSubTitle("");
  //             setEmail("");
  //             handleReset();
  //             navigate("/userJC24Profile");
  //           }, 5000);
  //           setLoading(false);
  //         } else {
  //           scrollToTop();
  //           setMessageVisible(true);
  //           setTitle("Ocurrió un error guardando los datos");
  //           setSubTitle("vuelva a intentarlo mas tarde");
  //           setTimeout(() => {
  //             setMessageVisible(false);
  //             setTitle("");
  //             setSubTitle("");
  //             setEmail("");
  //             navigate("/userJC24Profile");
  //           }, 5000);
  //         }
  //       } else {
  //         scrollToTop();
  //         setLoading(false);
  //         setMessageVisible(true);
  //         setTitle("Ocurrió un error guardando los datos");
  //         setSubTitle("vuelva a intentarlo mas tarde");
  //         setTimeout(() => {
  //           setMessageVisible(false);
  //           setTitle("");
  //           setSubTitle("");
  //           setEmail("");
  //           navigate("/userJC24Profile");
  //         }, 5000);
  //       }
  //     } else {
  //       scrollToTop();
  //       setLoading(false);
  //       setMessageVisible(true);
  //       setTitle("Ocurrió un error guardando los datos");
  //       setSubTitle("vuelva a intentarlo mas tarde");
  //       setTimeout(() => {
  //         setMessageVisible(false);
  //         setTitle("");
  //         setSubTitle("");
  //         setEmail("");
  //         navigate("/userJC24Profile");
  //       }, 5000);
  //     }
  //   } catch (error) {
  //     scrollToTop();
  //     setLoading(false);
  //     console.log(error);
  //     setMessageVisible(true);
  //     setTitle("Ocurrió un error guardando los datos");
  //     setSubTitle("vuelva a intentarlo mas tarde");
  //     setTimeout(() => {
  //       setMessageVisible(false);
  //       setTitle("");
  //       setSubTitle("");
  //       setEmail("");
  //       navigate("/userJC24Profile");
  //     }, 5000);
  //   }
  // };
  const handleHome = () => {
    navigate("/reader_profile");
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <section className="video-container">
        <article className=" ">
          <div className=" ">
            <div className="iniciar-container">
              <h1 className="video-title">Análisis biomecánico por video</h1>
              <p className="video-text">
                Para iniciar el análisis por video se debe cargar dos archivos
                csv, primero el de datos verticales y luego el de datos
                horizontales
              </p>

              {!resetearVisible ? (
                <>
                  <p className="video-text">
                    Click en "Iniciar" para iniciar la carga de datos
                  </p>

                  <button onClick={handleInnit} className="video-boton ">
                    Iniciar
                  </button>
                </>
              ) : (
                <>
                  <p className="video-text">
                    Click en "Resetear" para reiniciar el análisis
                  </p>
                  <button onClick={handleReset} className="video-boton ">
                    Resetear
                  </button>
                </>
              )}
            </div>
          </div>
        </article>
        {verticalButtonVisible ? (
          <div id="vertical">
            <p className="video-text">
              Click en "Vertical" para cargar el archivo ".csv" de datos
              verticales
            </p>
            <ReactFileReader
              handleFiles={uploadVerticalFile}
              fileTypes={".csv"}
            >
              <button className="video-boton ">Vertical</button>
            </ReactFileReader>
          </div>
        ) : null}
        {horizontalButtonVisible ? (
          <>
            <p className="video-text">
              Click en "Horizontal" para cargar el archivo ".csv" de datos
              horizontales y ver análisis
            </p>
            <ReactFileReader
              handleFiles={uploadHorizontalFile}
              fileTypes={".csv"}
            >
              <button className="video-boton">Horizontal</button>
            </ReactFileReader>
          </>
        ) : null}
        {/* {clientInnitialDataInputVisible ? (
              <>
                <ClientInitialDataInput
                  setWeight={setWeight}
                  weight={weight}
                  size={size}
                  setSize={setSize}
                  refDistance={refDistance}
                  setRefDistance={setRefDistance}
                  videoFrameRate={videoFrameRate}
                  setVideoFrameRate={setVideoFrameRate}
                />
              </>
            ) : null} */}
        {analizarVisible ? (
          <>
            <p className="video-text">
              Click en analizar para enviar datos y ver análisis
            </p>
            <button
              onClick={jumpVideoCSVAnalysisFunction}
              className="video-boton"
            >
              Analizar
            </button>
          </>
        ) : null}
        {analysisVisible ? (
          <div className="video-chart">
            <Chart
              x={kneeAngle}
              xName="Angulo de rodilla"
              xColor="red"
              y={ankleAngle}
              yName="Angulo de tobillo"
              yColor="blue"
              z={hipAngleArray}
              zName="Angulo de cadera"
              zColor="green"
              t={verticalTimeArray}
            />
            {/* <p className=" ">
                  Hacer click en guardar si desea guardar los datos en la base o
                  imprimir para imprimir o descargar como PDF. Cuando los datos
                  se guardan se deben asignar a una persona, por eso se debe
                  ingresar un email para verificar si esa persona ya tiene una
                  ficha en la aplicación o es su primera vez.
                </p>

                <button onClick={() => setInputFormVisible(true)} className="">
                  Imprimir
                </button>
                <button onClick={() => setInputFormVisible(true)} className="">
                  Guardar
                </button> */}
          </div>
        ) : null}
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default JumpVideoAnalysis;

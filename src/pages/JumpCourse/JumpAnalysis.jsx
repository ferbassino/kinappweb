import React, { useState } from "react";
import ReactFileReader from "react-file-reader";
import { useNavigate } from "react-router-dom";
import Chart from "../../components/otros/Chart";
import InputForm from "../../components/VideoAnalysis.jsx/InputForm";

import { useEffect } from "react";
import { useLogin } from "../../context/LoginProvider";
import getUserClients from "./../../requests/clients/getUserClients";
import HashLoader from "react-spinners/HashLoader";
import ClientDataInput from "../../components/VideoAnalysis.jsx/ClientDataInput";
import OldClientDataInput from "../../components/VideoAnalysis.jsx/OldClientDataInput";
import generatePassword from "../../auxiliaries/generatePassword";
import client from "../../api/client";
import("./CourseForm.css");
import jumpVideoCSVAnalysis from "../../auxiliaries/videoJumpAnalysis.jsx/jumpVideoCSVAnalysis";
import Message from "../../components/general/Message";

const JumpAnalysis = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
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

  const [clientDataInputVisible, setClientDataInputVisible] = useState(false);
  const [oldClientDataInputVisible, setOldClientDataInputVisible] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [verticalButtonVisible, setVerticalButtonVisible] = useState(false);
  const [horizontalButtonVisible, setHorizontalButtonVisible] = useState(false);
  const [analysisVisible, setAnalysisVisible] = useState(false);
  const [resetearVisible, setResetearVisible] = useState(false);
  const [analizarVisible, setAnalizarVisible] = useState(false);

  const { profile } = useLogin();

  const [birthDate, setbirthDaste] = useState(new Date());
  const [size, setSize] = useState(new Date());
  const [weight, setWeight] = useState(0);
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

  const jumpVideoCSVAnalysisFunction = () => {
    const { kneeAngleArr, ankleAngleArr, verticalTimeArr } =
      jumpVideoCSVAnalysis(verticalString, horizontalString);

    setKneeAngle(kneeAngleArr);
    setAnkleAngle(ankleAngleArr);
    setVerticalTimeArray(verticalTimeArr);
    setAnalizarVisible(false);
    setAnalysisVisible(true);
  };

  const getCurrentUserClient = async () => {
    setLoading(true);
    try {
      const response = await getUserClients(profile.id);
      console.log("response.currenticlients", response.currentUserClients);
      if (response.success) {
        if (response.currentUserClients.length > 0) {
          console.log("email", email);
          const currClient = response.currentUserClients.filter(
            (client) => client.email === email
          );
          if (currClient.length > 0) {
            setCurrentClient(currClient);
            setLoading(false);
          } else if (currClient.length === 0) {
            setClientDataInputVisible(true);
            setLoading(false);
          } else {
            setMessageVisible(true);
            scrollToTop();
            setTitle("Ocurrió un error");
            setSubTitle("vuelva a ingresar el email");
            setTimeout(() => {
              setMessageVisible(false);
              setTitle("");
              setSubTitle("");
              setEmail("");
              navigate("/userJC24Profile");
            }, 5000);
          }
        } else {
          alert("no se encontraron registros para ese paciente");
        }
      } else {
        setLoading(false);
        scrollToTop();
        setMessageVisible(true);
        setTitle("Ocurrió un error");
        setSubTitle("vuelva a ingresar el email");
        setTimeout(() => {
          setMessageVisible(false);
          setTitle("");
          setSubTitle("");
          setEmail("");
          navigate("/userJC24Profile");
        }, 5000);
      }
    } catch (error) {
      setLoading(false);
      scrollToTop();
      console.log(error);
      setMessageVisible(true);
      setTitle("Ocurrió un error");
      setSubTitle("vuelva a intentarlo mas tarde");
      setTimeout(() => {
        setMessageVisible(false);
        setTitle("");
        setSubTitle("");
        setEmail("");
        navigate("/userJC24Profile");
      }, 5000);
    }
  };

  const handleSubmit = () => {
    getCurrentUserClient();
  };

  const handleInnit = () => {
    setResetearVisible(true);
    setVerticalButtonVisible(true);
  };
  const handleReset = () => {
    scrollToTop();
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
    setSize(0);
    setWeight(0);
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
  };

  useEffect(() => {
    const pass = generatePassword();
    setPassword(pass);
    setUserId(profile.id);
  }, []);

  const dataObj = {
    kinoveaData: [verticalString, horizontalString],
    testTime: 0,
    videoFrameRate: 240,
    motionType: "kinoveaJump",
    weight,
  };

  const dataClientObj = {
    email,
    password,
    birthDate,
    size,
    gender: gender,
    userId,
  };
  const handleDataInputSubmit = async () => {
    try {
      setLoading(true);
      const response = await client.post("/api/client/create", dataClientObj);
      if (response.data.success) {
        const dataMovObj = {
          email,
          motionType: dataObj.motionType,
          kinoveaData: dataObj.kinoveaData,
          videoFrameRate: dataObj.videoFrameRate,
          weight: dataObj.weight,
          size: response.data.savedClient.size,
          gender: response.data.savedClient.gender,
          pALevel: pALevel,
          mPActivity: mPActivity,
          mFComponents: mFComponents,
          age: 51,
          userId: userId,
          clientId: response.data.savedClient._id,
        };

        if (dataMovObj) {
          const res = await client.post("/api/motion/create", dataMovObj);
          if (res.data.success) {
            scrollToTop();
            setMessageVisible(true);
            setTitle("¡Los datos se guardaron con éxito!");
            setSubTitle("Podran ser visualizados en el panel de evaluaciones");
            setTimeout(() => {
              setMessageVisible(false);
              setTitle("");
              setSubTitle("");
              setEmail("");
              handleReset();
              navigate("/userJC24Profile");
            }, 5000);
            setLoading(false);
          } else {
            scrollToTop();
            setMessageVisible(true);
            setTitle("Ocurrió un error guardando los datos");
            setSubTitle("vuelva a intentarlo mas tarde");
            setTimeout(() => {
              setMessageVisible(false);
              setTitle("");
              setSubTitle("");
              setEmail("");
              navigate("/userJC24Profile");
            }, 5000);
          }
        } else {
          scrollToTop();
          setLoading(false);
          setMessageVisible(true);
          setTitle("Ocurrió un error guardando los datos");
          setSubTitle("vuelva a intentarlo mas tarde");
          setTimeout(() => {
            setMessageVisible(false);
            setTitle("");
            setSubTitle("");
            setEmail("");
            navigate("/userJC24Profile");
          }, 5000);
        }
      } else {
        scrollToTop();
        setLoading(false);
        setMessageVisible(true);
        setTitle("Ocurrió un error guardando los datos");
        setSubTitle("vuelva a intentarlo mas tarde");
        setTimeout(() => {
          setMessageVisible(false);
          setTitle("");
          setSubTitle("");
          setEmail("");
          navigate("/userJC24Profile");
        }, 5000);
      }
    } catch (error) {
      scrollToTop();
      setLoading(false);
      console.log(error);
      setMessageVisible(true);
      setTitle("Ocurrió un error guardando los datos");
      setSubTitle("vuelva a intentarlo mas tarde");
      setTimeout(() => {
        setMessageVisible(false);
        setTitle("");
        setSubTitle("");
        setEmail("");
        navigate("/userJC24Profile");
      }, 5000);
    }
  };

  return (
    <div>
      {messageVisible ? (
        <>
          <Message title={title} error={error} subTitle={subTitle} />
        </>
      ) : (
        <>
          <>
            <section className="text-gray-600 body-font relative mb-60">
              <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-col text-center w-full ">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
                    Análisis biomecánico por video
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Para iniciar el análisis por video se debe cargar dos
                    archivos csv, primero el de datos verticales y luego el de
                    datos horizontales
                  </p>

                  {!resetearVisible ? (
                    <>
                      <p className=" mt-10 lg:w-2/3 mx-auto leading-relaxed text-base">
                        Click en "Iniciar" para iniciar la carga de datos
                      </p>
                      <a href="#vertical">
                        <button
                          onClick={handleInnit}
                          className="flex mx-auto mt-5 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg"
                        >
                          Iniciar
                        </button>
                      </a>
                    </>
                  ) : (
                    <>
                      <p className=" mt-10 lg:w-2/3 mx-auto leading-relaxed text-base">
                        Click en "Resetear" para reiniciar el análisis
                      </p>
                      <button
                        onClick={handleReset}
                        className="flex mx-auto mt-5 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg"
                      >
                        Resetear
                      </button>
                    </>
                  )}
                </div>
              </div>
            </section>
            {verticalButtonVisible ? (
              <div id="vertical">
                <p className=" mt-10 lg:w-2/3 mx-auto leading-relaxed text-base">
                  Click en "Vertical" para cargar el archivo ".csv" de datos
                  verticales
                </p>
                <ReactFileReader
                  handleFiles={uploadVerticalFile}
                  fileTypes={".csv"}
                >
                  <button className="flex mx-auto mt-10 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
                    Vertical
                  </button>
                </ReactFileReader>
              </div>
            ) : null}
            {horizontalButtonVisible ? (
              <>
                <p className=" mt-10 lg:w-2/3 mx-auto leading-relaxed text-base">
                  Click en "Horizontal" para cargar el archivo ".csv" de datos
                  horizontales y ver análisis
                </p>
                <ReactFileReader
                  handleFiles={uploadHorizontalFile}
                  fileTypes={".csv"}
                >
                  <button className="flex mx-auto mt-10 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
                    Horizontal
                  </button>
                </ReactFileReader>
              </>
            ) : null}
            {analizarVisible ? (
              <>
                <p className=" mt-10 lg:w-2/3 mx-auto leading-relaxed text-base">
                  Click en analizar para enviar datos y ver análisis
                </p>
                <button
                  onClick={jumpVideoCSVAnalysisFunction}
                  className="flex mx-auto mt-10 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg"
                >
                  Analizar
                </button>
              </>
            ) : null}
            {analysisVisible ? (
              <>
                <Chart
                  x={kneeAngle}
                  xName="Angulo de rodilla"
                  xColor="red"
                  y={ankleAngle}
                  yName="Angulo de tobillo"
                  yColor="blue"
                  // z={verticalWristArray}
                  // zName="Wrist"
                  // zColor="green"
                  t={verticalTimeArray}
                />
                <p className=" mt-10 lg:w-2/3 mx-auto leading-relaxed text-base">
                  Hacer click en guardar si desea guardar los datos en la base o
                  imprimir para imprimir o descargar como PDF. Cuando los datos
                  se guardan se deben asignar a una persona, por eso se debe
                  ingresar un email para verificar si esa persona ya tiene una
                  ficha en la aplicación o es su primera vez.
                </p>

                <button
                  // onClick={() => setInputFormVisible(true)}
                  className="flex mx-auto mt-10 mb-10 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg"
                >
                  Imprimir
                </button>
                <button
                  onClick={() => setInputFormVisible(true)}
                  className="flex mx-auto mt-10 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg"
                >
                  Guardar
                </button>
              </>
            ) : null}

            {loading ? (
              <>
                <div className="spinner-Container">
                  <HashLoader
                    color={"#011a42"}
                    loading={loading}
                    cssOverride={{
                      display: "block",
                      margin: "0 auto",
                      borderColor: "#011a42",
                    }}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              </>
            ) : (
              <>
                {inputFormVisible ? (
                  <>
                    {loading ? (
                      <div className="spinner-Container">
                        <HashLoader
                          color={"#011a42"}
                          loading={loading}
                          cssOverride={{
                            display: "block",
                            margin: "0 auto",
                            borderColor: "#011a42",
                          }}
                          size={150}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      </div>
                    ) : (
                      <InputForm
                        email={email}
                        setEmail={setEmail}
                        handleSubmit={handleSubmit}
                      />
                    )}
                  </>
                ) : null}
                {clientDataInputVisible ? (
                  <>
                    <ClientDataInput
                      email={email}
                      handleDataInputSubmit={handleDataInputSubmit}
                      birthDate={birthDate}
                      setBirthDate={setbirthDaste}
                      setWeight={setWeight}
                      weight={weight}
                      size={size}
                      setSize={setSize}
                      gender={gender}
                      setGender={setGender}
                      pALevel={pALevel}
                      setPALevel={setPALevel}
                      mfComponents={mFComponents}
                      setMFComponents={setMFComponents}
                      mPActivity={mPActivity}
                      setMPActivity={setMPActivity}
                      pAType={pAType}
                      setPAType={setPAType}
                      roles={roles}
                      setRoles={setRoles}
                    />
                  </>
                ) : null}
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};

export default JumpAnalysis;

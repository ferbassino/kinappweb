import React, { useContext, useEffect } from "react";

import "./Downloads.css";
import Navbar from "../../../../components/landing/header/Navbar";
import Footer from "../../../../components/landing/footer/Footer";
import jumpLogo from "../../../../assets/icon.png";
import android from "../../../../assets/android.png";
import { testsContext } from "../../../../context/TestsContext";
import { updateApp } from "../../../../services/appsServices";

const jumpApk =
  "https://storage.googleapis.com/kinapp-web/kinapp-web/apks/jump.apk";
const Downloads = () => {
  const { apps } = useContext(testsContext);

  const getJump = () => {
    const jumpObj = apps.find((app) => app.name === "jump0");
    return jumpObj;
  };

  const items = [
    "Counter movement jump",
    "Squat jump",
    "Drop jump",
    "Stiffness",
  ];

  // descargar app desde playstore
  const handleAPK = () => {
    const id = "664761c5e59f61ff53675683";
    const jumpObj = getJump();

    let oldDownloads = jumpObj.downloads;

    const newDowunloads = (oldDownloads += 1);

    const values = { downloads: newDowunloads };
    try {
      const updateDownloads = async () => {
        const res = await updateApp(id, values);
        console.log(res);
      };
      updateDownloads();
    } catch (error) {
      console.log(error);
    }
  };

  // para descargar la app desde la nube
  // const handleAPK = (url) => {
  //   const id = "664761c5e59f61ff53675683";
  //   const jumpObj = getJump();

  //   let oldDownloads = jumpObj.downloads;

  //   const newDowunloads = (oldDownloads += 1);

  //   const values = { downloads: newDowunloads };
  //   try {
  //     const updateDownloads = async () => {
  //       const res = await updateApp(id, values);
  //     };
  //     updateDownloads();
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   const aTag = document.createElement("a");
  //   const fileName = url.split("/").pop();
  //   aTag.href = url;
  //   aTag.setAttribute("download", fileName);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // };
  return (
    <div id="kinapp">
      <header>
        <Navbar />
      </header>

      <section className="down-container">
        <div className="down-header-container">
          <div className="down-title-container">
            <h1 className="down-title">Descargas</h1>
            <p className="down-subtitle">
              Jump es una aplicación para dispositivos android que evalúa el
              salto vertical registrando, entre otras variables, su altura,
              tiempo de vuelo, velocidad de despegue, fuerza y potencia media.
              Importante: debes ser un usuario registrado de kinApp para poder
              descargar la aplicacion.
            </p>
            <p className="down-subtitle">
              Importante: debes ser un usuario registrado de kinApp para poder
              descargar la aplicación.
            </p>

            <p className="down-ecosistema">Saltos que evalua:</p>
          </div>

          <div className="down-items">
            {items.map((item, index) => (
              <div key={index} className="">
                <div className="down-item-e-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="check"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <p className="down-item">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------------------------web----------------------------- */}
      <section className="down-description-container">
        <div className="down-desc-container">
          <div className="down-text-container">
            <h2 id="web-application" className="down-item-des">
              Descargala para dispositivos android
            </h2>
            <div className="android-container">
              <img alt="team" className="us-image-android" src={android} />
            </div>
          </div>

          <div className="down-icon-container">
            <p className="down-desc">
              Hacé click en el ícono para descargar 👇
            </p>
            <a
              onClick={() => handleAPK()}
              href="https://play.google.com/store/apps/details?id=com.ferbassino.jump&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={jumpLogo} alt="jumpApk" className="jump-logo-image" />
            </a>
            {/* <p className="down-desc">Hacé click en el ícono para descargar</p>
            <img
              alt="team"
              className="us-image"
              onClick={() => handleAPK(jumpApk)}
              src={jumpLogo}
            /> */}
            {/* <div className="down-icon-container">
            <p className="down-desc">Hacé click en el ícono para descargar</p>
            <img
              alt="team"
              className="us-image"
              onClick={() => handleAPK(jumpApk)}
              src={jumpLogo}
            />
          </div> */}
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Downloads;

import { useState, useEffect } from "react";
import io from "socket.io-client"; // Importar socket.io-client
import "./SensorData.css";
import MultiLineChart from "../../components/socket/MultiLineChart";
import Device3D from "../../components/socket/Device3D";

import Device2D from "../../components/socket/DeviceMesh";

function SensorData() {
  const [sensorData, setSensorData] = useState({});
  const [pitch, setPitch] = useState([]);
  const [roll, setRoll] = useState([]);
  const [yaw, setYaw] = useState([]);
  const xData = Array.from({ length: 50 }, (_, index) => index + 1);

  // Inicializar el socket
  useEffect(() => {
    const socket = io(
      "https://kinapp-api.vercel.app/my-custom-socket-path/custom-socket",
      {
        path: "/my-custom-socket-path",
      }
    );

    // Escuchar los datos del servidor
    socket.on("sensorData", (data) => {
      // Procesar los datos recibidos
      if (data.pitch) {
        setPitch((prevPitch) => {
          const newPitch = [...prevPitch, data.pitch];
          return newPitch.length > 50 ? newPitch.slice(1) : newPitch;
        });

        setRoll((prevRoll) => {
          const newRoll = [...prevRoll, data.roll];
          return newRoll.length > 50 ? newRoll.slice(1) : newRoll;
        });

        setYaw((prevYaw) => {
          const newYaw = [...prevYaw, data.yaw];
          return newYaw.length > 50 ? newYaw.slice(1) : newYaw;
        });
      }
      setSensorData(data);
    });

    // Limpiar la conexión cuando el componente se desmonte
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Datos de los Sensores</h1>
      <Device3D
        pitch={pitch[pitch.length - 1]}
        roll={roll[roll.length - 1]}
        yaw={yaw[yaw.length - 1]}
      />
      {/* Usar el componente 3D */}
      <Device2D pitch={sensorData.pitch} />
      <MultiLineChart xData={xData} yData1={pitch} yData2={roll} yData3={yaw} />
    </div>
  );
}

export default SensorData;

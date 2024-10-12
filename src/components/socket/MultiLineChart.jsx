import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement, // Importa el PointElement
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes necesarios para Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
); // Asegúrate de registrar PointElement

const MultiLineChart = ({ xData, yData1, yData2, yData3 }) => {
  const data = {
    labels: xData,
    datasets: [
      {
        label: "Serie 1",
        data: yData1,
        borderColor: "rgba(75,192,192,1)",
        fill: false,
        pointRadius: 0, // Sin puntos
      },
      {
        label: "Serie 2",
        data: yData2,
        borderColor: "rgba(153,102,255,1)",
        fill: false,
        pointRadius: 0, // Sin puntos
      },
      {
        label: "Serie 3",
        data: yData3,
        borderColor: "rgba(255,159,64,1)",
        fill: false,
        pointRadius: 0, // Sin puntos
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Eje X",
        },
      },
      y: {
        title: {
          display: true,
          text: "Eje Y",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default MultiLineChart;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReaderItems.css";

const ReaderItems = ({ title }) => {
  const navigate = useNavigate();
  const handleTitle = () => {
    switch (title) {
      case "Tus cursos":
        navigate("/cursos");
        break;
      case "Análisis guardados":
        navigate("/tests");
        break;
      case "I.M.U. análisis":
        navigate("/imu_analysis");
        break;
      case "Video análisis":
        navigate("/jump_video_analysis");
        break;
      case "Programa":
        navigate("/jump_program");
        break;
      case "Mobile":
        navigate("/tests");
        break;
      case "Otros":
        navigate("/tests");
        break;
    }
  };
  return (
    <button className="reader-item-boton" onClick={handleTitle}>
      {title}
    </button>
  );
};

export default ReaderItems;

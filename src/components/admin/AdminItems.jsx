import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminItems.css";

const AdminItems = ({ title }) => {
  const navigate = useNavigate();
  const handleTitle = () => {
    switch (title) {
      case "Users":
        navigate("/admin_users");
        break;
      case "Projects":
        navigate("/projects");
        break;
      case "Tests":
        navigate("/admin_tests");
        break;
      case "Jump validation":
        navigate("/jump_validation");
        break;
      // case "Video análisis":
      //   navigate("/jump_video_analysis");
      //   break;
      // case "Programa":
      //   navigate("/jump_program");
      //   break;
      // case "Mobile":
      //   navigate("/tests");
      //   break;
      // case "Otros":
      //   navigate("/tests");
      //   break;
    }
  };
  return (
    <button className="boton" onClick={handleTitle}>
      {title}
    </button>
  );
};

export default AdminItems;

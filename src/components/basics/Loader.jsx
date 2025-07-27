import React from "react";
import "./Loader.css";
import { FiLoader } from "react-icons/fi";

const Loader = () => {
  return (
    <div className="ld-container">
      <div className="ld-sphere">
        <div className="ld-core"></div>
        <div className="ld-orbits">
          <div className="ld-orbit ld-orbit-1"></div>
          <div className="ld-orbit ld-orbit-2"></div>
          <div className="ld-orbit ld-orbit-3"></div>
        </div>
        <div className="ld-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="ld-particle" style={{ "--i": i }}></div>
          ))}
        </div>
      </div>
      <div className="ld-text">
        <FiLoader className="ld-icon" />
        <span>Cargando...</span>
      </div>
    </div>
  );
};

export default Loader;

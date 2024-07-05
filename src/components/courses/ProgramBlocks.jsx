import React from "react";
import "./ProgramBlocks.css";
const ProgramBlocks = ({
  semana,
  fechaSemana,
  title,
  videoArray,
  sincronicoArray,
}) => {
  return (
    <div className="block-programa">
      <div className="program-izq">
        <span className="semana">{semana}</span>
        <br />
        <span className="semana">{fechaSemana}</span>
        <h2 className="titulo-semana">{title}</h2>
      </div>
      <div className="program-der">
        <ul className="ul-program">
          {videoArray.map((li, index) => (
            <li key={index} className="li-program">
              {li}
            </li>
          ))}
        </ul>

        <div className="encuentro">
          <span className="encuentro">ENCUENTRO SINCRONICO</span>
          <ul>
            {sincronicoArray.map((li, index) => (
              <li key={index} className="li-program">
                {li}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramBlocks;

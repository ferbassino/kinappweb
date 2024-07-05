import React from "react";
import "./CourseBlock.css";
export default function CourseBlock({ img, title, description }) {
  return (
    <div className="tus-cursos-card">
      <div className="tus-cursos-img-box">
        <img src={img} alt={`${title} image`} />
      </div>
      <div className="tus-cursos-card-content">
        <h1 className="tus-cursos-card-heading">{title}</h1>
        <p className="tus-cursos-card-text">{description}</p>
      </div>
    </div>
  );
}

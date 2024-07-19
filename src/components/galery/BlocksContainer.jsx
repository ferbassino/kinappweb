import React from "react";

export default function BlocksContainer({ array }) {
  return (
    <div className="Blocks-container">
      <header className="Blocks-header">
        <h1 className="tus-cursos-title">Capacitaciones</h1>
        <h2 className="tus-cursos-subtitle">
          Aumenta tus conocimientos en biomecánica inscribiendote en nuestros
          cursos
        </h2>
      </header>
      <main className="tus-cursos-container">
        <div className="tus-cursos-cards-grid">
          {array.map((el) => (
            <div
              key={el.id}
              onClick={() => handleCourse(el)}
              className="block-container"
            >
              <CourseBlock
                img={el.img}
                title={el.descriptionTitle}
                description={el.description}
              />
            </div>
          ))}
        </div>
      </main>
      <footer className="tus-cursos-footer"></footer>
    </div>
  );
}

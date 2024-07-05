import { useContext } from "react";
import { testsContext } from "../../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/landing/header/Navbar";
import Footer from "../../../../components/landing/footer/Footer";
import "./Cursos.css";
import CourseBlock from "../../../../components/tus_cursos/course_block/CourseBlock";

import { courses } from "../../../../auxiliaries/courses/courses";

function TusCursos() {
  const { user } = useContext(testsContext);
  const navigate = useNavigate();

  const handleCourse = (el) => {
    navigate(`/course_description/${el.id}`);
  };
  return (
    <>
      <Navbar />
      <div className="cursos-container">
        <header className="tus-cursos-header">
          <h1 className="tus-cursos-title">Capacitaciones</h1>
          <h2 className="tus-cursos-subtitle">
            Aumenta tus conocimientos en biomecánica inscribiendote en nuestros
            cursos
          </h2>
        </header>
        <main className="tus-cursos-container">
          <div className="tus-cursos-cards-grid">
            {courses.map((el) => (
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

      <Footer />
    </>
  );
}

export default TusCursos;

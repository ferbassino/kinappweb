import { useContext } from "react";
import { testsContext } from "../../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/landing/header/Navbar";
import Footer from "../../../../components/landing/footer/Footer";
// import "./Cursos.css";
import CourseBlock from "../../../../components/tus_cursos/course_block/CourseBlock";
import { courses } from "../../../../auxiliaries/courses/courses";
import GalleryContainer from "../../../../components/galery/GalleryContainer";

function TusCursos() {
  const { user } = useContext(testsContext);
  const navigate = useNavigate();

  const handleCourse = (el) => {
    navigate(`/course_description/${el.id}`);
  };
  const title = "Capacitaciones";
  const subTitle =
    "Aumenta tus conocimientos en biomecánica inscribiendote en nuestros cursos";
  return (
    <>
      <Navbar />
      <GalleryContainer
        title={title}
        subTitle={subTitle}
        array={courses}
        handleCourse={handleCourse}
      />
      <Footer />
    </>
  );
}

export default TusCursos;

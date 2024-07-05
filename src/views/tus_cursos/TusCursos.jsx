import { useContext, useEffect, useState } from "react";
import { testsContext } from "../../context/TestsContext";
import Navbar from "../../components/landing/header/Navbar";
import Footer from "../../components/landing/footer/Footer";
import "./TusCursos.css";
import CourseBlock from "../../components/tus_cursos/course_block/CourseBlock";
import { useNavigate } from "react-router-dom";

import { courses } from "../../auxiliaries/courses/courses";
import { getUserCourses } from "../../services/userServices";

function TusCursos() {
  const navigate = useNavigate();
  const { user } = useContext(testsContext);
  const [userCourses, setUserCourses] = useState([]);
  const [notCourses, setNotCourses] = useState(false);
  const handleCourse = (el) => {
    navigate(`/clases/${el.name}`);
  };

  const getCourses = async () => {
    try {
      let activeCourses = [];
      if (user.courses.length > 1) {
        setNotCourses(false);
        const userCourses = await getUserCourses(user.id);

        
        activeCourses = userCourses.filter((el) => el.active);

        activeCourses.map((element, index) => {
          courses.map((el) => {
            if (el.name === element.name) {
              activeCourses[index] = {
                ...element,
                descriptionTitle: el.descriptionTitle,
                subTitle: el.subTitle,
                description: el.description,
                img: el.img,
              };
            }
          });
        });

        setUserCourses(activeCourses);
      } else {
        setNotCourses(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <Navbar />
      <div className="cursos-container">
        <header className="tus-cursos-header">
          <h1>Tus cursos</h1>
          {notCourses ? (
            <>
              <h2>no estas inscripto en ningun curso</h2>
            </>
          ) : null}
        </header>
        <main className="tus-cursos-container">
          <div className="tus-cursos-cards-grid">
            {userCourses.map((el) => (
              <div key={el.id} onClick={() => handleCourse(el)}>
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

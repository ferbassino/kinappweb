import CourseBlock from "../tus_cursos/course_block/CourseBlock";
import "./GalleryContainer.css";
const GalleryContainer = ({ title, subTitle, array, handleCourse }) => {
  return (
    <div className="cursos-container">
      <header className="tus-cursos-header">
        <h1 className="tus-cursos-title">{title}</h1>
        <h2 className="tus-cursos-subtitle">{subTitle}</h2>
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
};

export default GalleryContainer;

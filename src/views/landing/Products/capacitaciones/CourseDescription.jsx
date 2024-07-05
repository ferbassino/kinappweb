import React from "react";
import Navbar from "../../../../components/landing/header/Navbar.jsx";
import Footer from "../../../../components/landing/footer/Footer.jsx";
import "./CourseDescription.css";
import PaymentButton from "../../../../components/mercadopago/PaymentButton.jsx";
import { courses } from "../../../../auxiliaries/courses/courses.jsx";
import { useParams } from "react-router-dom";

export default function CourseDescription() {
  const { courseId } = useParams();
  const currentCourse = courses.find((el) => el.id === courseId);

  return (
    <>
      <Navbar />
      <main className="cursos-container">
        <article className="curso-container">
          <h1 className="curse-title">{currentCourse.descriptionTitle}</h1>
          <h2 className="curse-subtitle">{currentCourse.subTitle}</h2>
          <PaymentButton
            id={currentCourse.id}
            title={currentCourse.title}
            quantity={currentCourse.quantity}
            price={currentCourse.price}
            buttonTitle={currentCourse.buttonTitle}
          />
          <p className="curse-description">{currentCourse.description}</p>

          <video
            controls
            controlsList="nodownload"
            className="program-video"
            loop
            autoPlay={true}
            // poster="./images/1.jpg"
            muted
            src={currentCourse.video}
          ></video>
          {/* <img
            width="100%"
            alt="content"
            className="image"
            src={currentCourse.img}
          /> */}
        </article>
        <section className="program-container">
          <header>
            <h1 className="program-title">PROGRAMA</h1>
          </header>
          <main>
            {currentCourse.program.map((element, index) => (
              <div className="program-item-container" key={index}>
                <h2 className="program-item-title">{element.title}</h2>
                <h3 className="program-item-subtitle">{element.subTitle}</h3>
                {element.content.map((el) => (
                  <p key={Math.random()} className="program-item-content">
                    {el}
                  </p>
                ))}
              </div>
            ))}
          </main>
          <footer></footer>
        </section>
      </main>
      <Footer />
    </>
  );
}

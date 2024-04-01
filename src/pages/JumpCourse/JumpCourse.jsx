import React from "react";
import CourseForm from "./CourseForm";
import { Link } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
const JumpCourse = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <span className="sm:text-2xl text-2xl font-medium title-font text-blue-900">
          Consulta el programa del curso 👉
          <Link
            to="/jump_program/#titulo-programa"
            className="sm:text-2xl text-2xl font-medium title-font text-blue-900"
          >
            aquí
          </Link>
        </span>
      </div>
      <CourseForm />
    </>
  );
};

export default JumpCourse;

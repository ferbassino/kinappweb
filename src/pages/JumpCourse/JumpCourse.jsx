import React from "react";
import CourseForm from "./CourseForm";
import { Link } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
const JumpCourse = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <h1 className="sm:text-2xl text-2xl font-medium title-font text-blue-900">
          Consulta el programa del curso aqui
        </h1>
        <Link to="/jump_program">
          <FaRegListAlt className="sm:w-20 sm:h-20 h-10 w-10 " />
        </Link>
      </div>
      <CourseForm />
    </>
  );
};

export default JumpCourse;

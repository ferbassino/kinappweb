import React from "react";
import "./Error404.css"; // Importamos los estilos CSS
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-container">
      <h1>Error 404</h1>
      <p>Page not found</p>
      <NavLink to={"/"} className="link-home">
        <p className="link-home">volver a kinApp</p>
      </NavLink>
    </div>
  );
};

export default Error404;

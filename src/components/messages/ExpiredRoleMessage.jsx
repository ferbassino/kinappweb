import React from "react";
import "./ExpiredRoleMessage.css";
import { NavLink } from "react-router-dom";
const ExpiredRoleMessage = () => {
  return (
    <div className="expired_role">
      <h1 className="expired_title">
        El período de prueba de 30 dias ha finalizado
      </h1>
      <h2 className="expired_subtitle1">
        ¡Gracias por haber utilizado nuestro entorno!
      </h2>
      <h2 className="expired_subtitle2">
        Podés seguir utilizándolo solo que algunas funciones ya no van a estar
        disponibles
      </h2>
      <h2 className="expired_subtitle2">
        Si querés ser usuario completo de kinApp, haciendo clik 👉
        <NavLink> aquí </NavLink> vas a obtener toda la información
      </h2>
    </div>
  );
};

export default ExpiredRoleMessage;

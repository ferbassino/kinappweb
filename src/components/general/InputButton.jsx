import React from "react";
import "./InputButton.css"; // Importa el archivo CSS para los estilos

function InputButton({ text }) {
  return (
    <div className="centered-button-container">
      <button className="custom-button">{text}</button>
    </div>
  );
}
export default InputButton;

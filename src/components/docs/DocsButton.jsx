import React from "react";
import "./docsComponents.css";
export default function DocsButton({ text, handleButton }) {
  return (
    <button className="docs-button" onClick={handleButton}>
      {text}
    </button>
  );
}

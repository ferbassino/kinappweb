import React from "react";
import "./docsComponents.css";

function DocsHeader({ title, subTitle }) {
  return (
    <div className="header-container">
      <h1 className="docs-header-title">{title}</h1>
      <h2 className="docs-header-subtitle">{subTitle}</h2>
    </div>
  );
}

export default DocsHeader;

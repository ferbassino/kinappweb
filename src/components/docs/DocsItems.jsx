import React from "react";
import "./docsComponents.css";

function DocsItems({ title, array }) {
  return (
    <div className="docs-items-Container">
      <h3 className="docs-items-title">{title}</h3>
      <ul className="docs-ul-items">
        {array.map((el) => (
          <li className="docs-li-items" key={el}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocsItems;

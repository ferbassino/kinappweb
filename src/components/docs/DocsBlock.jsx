import React from "react";

function DocsBlock({ title, subTitle, arrayContent }) {
  return (
    <article className="docs-block-container">
      <h2 className="docs-block-title">{title}</h2>
      <h3 className="docs-block-subtitle">{subTitle}</h3>
      {arrayContent.map((el) => (
        <p key={el} className="docs-block-content">
          {el}
        </p>
      ))}
    </article>
  );
}

export default DocsBlock;

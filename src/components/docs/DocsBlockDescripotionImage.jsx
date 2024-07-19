import React from "react";

function DocsBlockDescriptionImage({ img, content }) {
  return (
    <article>
      <p className="docs-block-content">{content}</p>
      <div className="docs-blok-img-container">
        <img className="docs-blok-img" src={img} />
      </div>
    </article>
  );
}

export default DocsBlockDescriptionImage;

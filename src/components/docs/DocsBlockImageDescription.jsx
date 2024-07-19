import React from "react";

function DocsBlockImageDescription({ img, content }) {
  return (
    <article>
      <div className="docs-blok-img-container">
        <img className="docs-blok-img" src={img} />
      </div>
      <p className="docs-block-content">{content}</p>
    </article>
  );
}

export default DocsBlockImageDescription;

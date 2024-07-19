import React from "react";

function DocsBlockImage({ img }) {
  return (
    <article className="docs-blok-img-container">
      <img className="docs-blok-img" src={img} />
    </article>
  );
}

export default DocsBlockImage;

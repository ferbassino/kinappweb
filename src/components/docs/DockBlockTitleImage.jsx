import React from "react";

function DocsBlockTitleImage({ title, img }) {
  return (
    <article>
      <h2 className="docs-block-title">{title}</h2>
      <div className="docs-blok-img-container">
        <img className="docs-blok-img" src={img} />
      </div>
    </article>
  );
}

export default DocsBlockTitleImage;

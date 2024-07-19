import React from "react";

function DocsBlockContentImage({ title, subtitle, content, img, description }) {
  return (
    <article className="docs-block-container">
      <h2 className="docs-block-title">{title}</h2>
      <h3 className="docs-block-subtitle">{subtitle}</h3>
      <p className="docs-block-content">{content}</p>
      <div className="docs-blok-img-container">
        <img className="docs-blok-img" src={img} />
      </div>

      <p className="docs-block-content">{description}</p>
    </article>
  );
}

export default DocsBlockContentImage;

import React from "react";

function DocsDescription({ description }) {
  return (
    <article>
      <p className="docs-block-content">{description}</p>
    </article>
  );
}

export default DocsDescription;

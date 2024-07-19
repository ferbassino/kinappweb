const BlockImage = ({ img, title, description }) => {
  return (
    <div className="block-image-card">
      <div className="block-image-img-box">
        <img src={img} alt={`${title} image`} />
      </div>
      <div className="block-image-card-content">
        <h1 className="block-image-card-heading">{title}</h1>
        <p className="block-image-card-text">{description}</p>
      </div>
    </div>
  );
};

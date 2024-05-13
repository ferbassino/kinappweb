import "./Block.css";
const Block = ({ url, title, text }) => {
  return (
    <div className="block-container">
      <img className="block-image" src={url} />
      <div className="block-text-container">
        <h1 className="block-title">{title}</h1>
        <p className="block-text">{text}</p>
      </div>
    </div>
  );
};

export default Block;

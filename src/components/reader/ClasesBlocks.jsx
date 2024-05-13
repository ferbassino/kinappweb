import React from "react";
import ReactPlayer from "react-player";

import videoImage from "../../assets/video_image.jpg";
import "./ClasesBlocks.css";
const ClasesBlocks = ({ date, title, subtitle, description, videoUrl }) => {
  return (
    <section className="block-container">
      <div className=" ">
        <div className=" ">
          <div className=" ">
            <h2 className="date">{date}</h2>
            <h1 className="bloque-title">{title}</h1>

            <h3 className="bloque-subtitle">{subtitle}</h3>

            <p className="bloque-description">{description}</p>
          </div>
          <div className="video-container">
            {/* <img src={videoImage} alt="video" /> */}
            <ReactPlayer
              url={videoUrl}
              controls
              width="100%"
              height="100%"
              light="https zaraza"
              para
              la
              prieview
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClasesBlocks;

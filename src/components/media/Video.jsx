import React from "react";

export default function Video(url) {
  return (
    <video
      controls
      controlsList="nodownload"
      className="program-video"
      loop
      autoPlay={true}
      // poster="./images/1.jpg"
      muted
      src={url}
    ></video>
  );
}

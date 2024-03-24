import React from "react";
import ReactPlayer from "react-player";

const url =
  "https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4";
const JumpClases = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center  mb-20 w-50">
          <h2 className="sm:text-3xl text-xs text-blue-900 tracking-widest font-medium title-font mb-1">
            Tus clases
          </h2>
          <ReactPlayer
            url="https://storage.cloud.google.com/kinapp-web/jump-course/2_posicion.mp4"
            controls
            width="100%"
            height="100%"
            // light="https zaraza" para la prieview
          />
        </div>
      </div>
    </section>
  );
};

export default JumpClases;

import React from "react";
import ReactPlayer from "react-player";

const JumpCourseClasesBlocks = ({
  date,
  title,
  subtitle,
  description,
  videoUrl,
}) => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-1 py-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {date}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {title}
            </h1>

            <a className="flex-grow text-indigo-500 py-2 text-lg px-1">
              {subtitle}
            </a>

            <p className="leading-relaxed mb-4">{description}</p>
            {/* <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Color</span>
              <span className="ml-auto text-gray-900">Blue</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-gray-900">Medium</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-gray-900">4</span>
            </div> */}
          </div>
          <div className="lg:w-1/2 w-full lg:h-auto  object-cover object-center ">
            <ReactPlayer
              url={videoUrl}
              controls
              width="100%"
              height="100%"
              // light="https zaraza" para la prieview
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JumpCourseClasesBlocks;

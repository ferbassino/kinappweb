import React from "react";

const Parrafo = ({ title, subtitle, text }) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0">
        <p className="text-2xl font-semibold title-font text-blue-900">
          {title}
        </p>
      </div>
      <div className="md:flex-grow">
        <h2 className=" text-lg md:text-2xl font-medium text-blue-900 title-font mb-2">
          {subtitle}
        </h2>
        <p className="text-lg text-justify leading-relaxed ">{text}</p>
      </div>
    </div>
  );
};

export default Parrafo;

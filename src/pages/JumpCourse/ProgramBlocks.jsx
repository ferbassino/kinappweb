import React from "react";

const ProgramBlocks = ({
  semana,
  fechaSemana,
  title,
  videoArray,
  sincronicoArray,
}) => {
  return (
    <div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
            {semana}
          </span>
          <span className="mt-1 text-gray-500 text-sm">{fechaSemana}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
            {title}
          </h2>
          <ul>
            {videoArray.map((li, index) => (
              <li key={index} className="leading-relaxed">
                {li}
              </li>
            ))}
          </ul>

          <div className=" md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="mt-5 font-semibold title-font text-gray-700">
              ENCUENTRO SINCRONICO
            </span>
            <ul>
              {sincronicoArray.map((li, index) => (
                <li key={index} className="leading-relaxed">
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramBlocks;

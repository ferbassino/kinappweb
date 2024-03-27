import React from "react";
import ReaderItem from "../../components/otros/ReaderItem";
const Reader = () => {
  const readerOptions = [
    "Evaluaciones",
    "Pacientes",
    "Estadistícas",
    "Doc",
    "Mobile",
    "Otros",
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Panel general
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Elegí una opción:
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {readerOptions.map((item) => (
            <ReaderItem key={item} title={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reader;

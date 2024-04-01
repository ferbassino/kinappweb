import React from "react";

const Message = ({ title, error, subTitle }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  scrollToTop();
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24   flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{error}</p>
          <p className="mb-8 leading-relaxed">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Message;

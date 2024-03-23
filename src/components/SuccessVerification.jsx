import React, { useEffect } from "react";
import kinAppLogo from "./../assets/kinapp_logo.svg";

const SuccessVerification = ({ userName, email }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img src={kinAppLogo} alt="kinapp_logo" className="h-20 "></img>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {userName}
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            ¡Tu email ya está verificado!
          </h1>
          <p className="mb-8 leading-relaxed">
            Ingresá a kinApp con tu correo {email} y contraseña para participar
            en el curso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessVerification;

import { Link } from "react-router-dom";
import kinAppLogo from "./../assets/kinapp_logo.svg";

const Hero = () => {
  return (
    <div className="bg-white ">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-10 lg:py-30">
          <div className="text-center">
            <div className="flex justify-center items-center mb-3">
              <img src={kinAppLogo} alt="kinapp_logo" className="h-20 "></img>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-blue-950 sm:text-6xl">
              kinApp
            </h1>
            <h2 className="text-3xl mt-6 md:text-4xl  leading-8 text-gray-600">
              Creamos herramientas sencillas para el análisis biomecánico
            </h2>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Ver mas... <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

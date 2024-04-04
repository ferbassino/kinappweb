import React from "react";

import "./ClientDataInput.css";

const ClientInitialDataInput = ({
  setWeight,
  weight,
  size,
  setSize,
  videoFrameRate,
  setVideoFrameRate,
  refDistance,
  setRefDistance,
}) => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5  mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div>
            <div className="input_container">
              <label htmlFor="tentacles">Ingresar la masa (peso) en kg:</label>
              <div className="datepicker_container">
                <input
                  onChange={(e) => setWeight(e.target.value)}
                  value={weight}
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="0"
                  max="300"
                />
              </div>
            </div>
            {/* ----------------------------------------------------- */}
            <div className="input_container">
              <label htmlFor="tentacles">Ingresar altura en centímetros:</label>
              <div className="datepicker_container">
                <input
                  onChange={(e) => setSize(e.target.value)}
                  value={size}
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="0"
                  max="300"
                />
              </div>
            </div>
            {/* ---------------------------------------------- */}
            <div className="input_container">
              <label htmlFor="tentacles">
                Ingresar distancia trocanter-cóndilo en centímetros:
              </label>
              <div className="datepicker_container">
                <input
                  onChange={(e) => setRefDistance(e.target.value)}
                  value={refDistance}
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="0"
                  max="100"
                />
              </div>
            </div>

            <div className="input_container">
              <label htmlFor="tentacles">
                Ingresar cuadros por segundo del video:
              </label>
              <div className="datepicker_container">
                <input
                  onChange={(e) => setVideoFrameRate(e.target.value)}
                  value={videoFrameRate}
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientInitialDataInput;

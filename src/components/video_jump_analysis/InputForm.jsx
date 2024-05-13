import React from "react";

const InputForm = ({ email, setEmail, handleSubmit }) => {
  return (
    <section className="text-gray-600 body-font relative mt-10">
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          {/* --------------- email ---------------- */}
          <div className="p-2 md:w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                ingresar email para verificar
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="p-2 w-full">
            <button
              onClick={handleSubmit}
              className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Buscar email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputForm;

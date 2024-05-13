import React, { useEffect, useState } from "react";
import generatePassword from "../../auxiliaries/generatePassword";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ClientDataInput.css";
import Select from "react-select";

import {
  genderSelect,
  pALevelSelect,
  fComponentsSelect,
  pATypeSelect,
  rolesSelect,
} from "../../auxiliaries/selects/clinetSelects";
const ClientDataInput = ({
  email,
  handleDataInputSubmit,
  birthDate,
  setBirthDate,
  setWeight,
  weight,
  size,
  setSize,
  gender,
  setGender,
  pALevel,
  setPALevel,
  mFComponents,
  mPActivity,
  setMFComponents,
  setMPActivity,
  roles,
  setRoles,
}) => {
  const [password, setPassword] = useState("");
  useEffect(() => {
    const pass = generatePassword();
    setPassword(pass);
  }, []);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            {email} no tiene registros todavía
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Completar los datos para crear perfil y guardar evaluación
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div>
            {/* --------------- email ---------------- */}
            <div className="p-2 md:w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
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

            {/* ------------------------------------------- */}
            <div className="input_container">
              <p>Día de nacimiento</p>
              <div className="datepicker_container">
                <DatePicker
                  selected={birthDate}
                  onChange={setBirthDate}
                  maxDate={new Date()}
                  showYearDropdown={true}
                  showMonthDropdown
                  showIcon
                  dateFormat="dd/MM/YYYY"
                />
              </div>
            </div>
            {/* ----------------------------------------------------- */}
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

            {/* ----------------------------------------------------- */}
            <div className="input_container">
              <label htmlFor="tentacles">ingrese el genero:</label>
              <div className="select">
                <Select
                  defaultValue={gender}
                  onChange={(e) => setGender(e.label)}
                  options={genderSelect}
                />
              </div>
            </div>

            {/* ----------------------------------------------------- */}

            <div className="input_container">
              <label htmlFor="tentacles">Frecuencia semanal:</label>
              <div className="select">
                <Select
                  defaultValue={pALevel}
                  onChange={(e) => setPALevel(e.label)}
                  options={pALevelSelect}
                />
              </div>
            </div>

            {/* ----------------------------------------------------- */}

            <div className="input_container">
              <label htmlFor="tentacles">Cualidad física principal:</label>
              <div className="select">
                <Select
                  defaultValue={mFComponents}
                  onChange={(e) => setMFComponents(e.label)}
                  options={fComponentsSelect}
                />
              </div>
            </div>

            {/* ----------------------------------------------------- */}
            <div className="input_container">
              <label htmlFor="tentacles">Tipo de Actividad Fisica:</label>
              <div className="select">
                <Select
                  defaultValue={mPActivity}
                  onChange={(e) => setMPActivity(e.label)}
                  options={pATypeSelect}
                />
              </div>
            </div>

            {/* ----------------------------------------------------- */}

            <div className="p-2 w-full">
              <button
                onClick={handleDataInputSubmit}
                className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientDataInput;

import { useEffect, useState } from "react";
import kinAppLogo from "./../assets/kinapp_logo.svg";
import { NavLink } from "react-router-dom";
import { useLogin } from "../context/LoginProvider";

const btnLink =
  "block inline-block py-1 hover:text-orange-600 cursor-pointer mr-4";
const activeLink = "blok inline-block py-1 text-blue-800 mr-4 ";

const NavBar = ({ handleLogout }) => {
  const { profile } = useLogin();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : btnLink)}
          >
            <img
              src={kinAppLogo}
              alt="kinapp_logo"
              className="w-7 h-7 ml-1"
            ></img>
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : btnLink)}
          >
            kinApp
          </NavLink>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : btnLink)}
          >
            Acerca de KinApp
          </NavLink>
          <NavLink
            to="/cursos"
            className={({ isActive }) => (isActive ? activeLink : btnLink)}
          >
            Capacitaciones
          </NavLink>
        </nav>
        {profile.userName ? (
          <>
            <NavLink
              // onClick={handleLogout}
              to="/profile"
              className={({ isActive }) => (isActive ? activeLink : btnLink)}
            >
              {profile.userName}
            </NavLink>
            <NavLink
              onClick={handleLogout}
              to="/sign_up"
              className={({ isActive }) => (isActive ? activeLink : btnLink)}
            >
              Sign up
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/login_form"
              className={({ isActive }) => (isActive ? activeLink : btnLink)}
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;

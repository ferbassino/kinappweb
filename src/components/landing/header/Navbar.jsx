import { useRef, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logout from "../../../services/logout";
import { testsContext } from "../../../context/TestsContext";

function Navbar() {
  const navRef = useRef();
  const { user, handleLogout, handleResetCurrentTest } =
    useContext(testsContext);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbar-header">
      <h3 className="kinapp">kinApp</h3>
      <nav className="nav-navbar" ref={navRef}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Acerca de kinApp</NavLink>
        <NavLink to="/courses">Capacitaciones</NavLink>
        <NavLink to="/about_us">Quienes somos</NavLink>
        {user.userName === "" ? (
          <>
            <NavLink to="/login_form">Login</NavLink>

            {/* <NavLink  to="/register">Registrarse</NavLink> */}
            <NavLink
              onClick={() =>
                alert("Función dehabilitada, estamos trabajando en ello")
              }
            >
              Registrarse
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/reader_profile" onClick={handleResetCurrentTest}>
              Perfil {user.userName}
            </NavLink>
            <NavLink to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </>
        )}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

import { useRef, useContext, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCog,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { testsContext } from "../../../context/TestsContext";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleLogout, handleResetCurrentTest } =
    useContext(testsContext);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    // {
    //   path: "/",
    //   name: "Inicio",
    //   icon: <FaHome className="nb-icon" />,
    //   show: true,
    // },
    {
      path: "/admin_panel",
      name: `Dashboard `,
      icon: <RiAdminFill className="nb-icon" />,
      show: user.roles === "admin",
    },
    {
      path: "/",
      name: "Logout",
      icon: <FaSignOutAlt className="nb-icon" />,
      show: user.userName !== "",
      onClick: handleLogout,
    },
  ];

  return (
    <header className="nb-header">
      <div className="nb-logo-container">
        <div to="/" className="nb-logo-link">
          <h3 className="nb-logo">
            <span className="nb-logo-accent">Admin</span>Panel
          </h3>
        </div>
        {/* <NavLink to="/" className="nb-logo-link">
          <h3 className="nb-logo">
            <span className="nb-logo-accent">Admin</span>Panel
          </h3>
        </NavLink> */}
      </div>

      <button className="nb-menu-btn" onClick={toggleNavbar}>
        {isOpen ? (
          <FaTimes className="nb-menu-icon" />
        ) : (
          <FaBars className="nb-menu-icon" />
        )}
      </button>

      <nav className={`nb-nav ${isOpen ? "nb-responsive" : ""}`} ref={navRef}>
        {navItems.map(
          (item, index) =>
            item.show && (
              <div key={index} className="nb-item-container">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nb-link ${isActive ? "nb-active" : ""}`
                  }
                  onClick={() => {
                    if (item.onClick) item.onClick();
                    handleResetCurrentTest();
                    setIsOpen(false);
                  }}
                >
                  {item.icon}
                  <span className="nb-link-text">{item.name}</span>
                  <div className="nb-link-underline"></div>
                </NavLink>
              </div>
            )
        )}

        <button className="nb-close-btn" onClick={toggleNavbar}>
          <FaTimes className="nb-close-icon" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

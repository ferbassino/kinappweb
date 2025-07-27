import React, { useState, useEffect, useContext, useMemo } from "react";
import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiUser,
  FiMail,
  FiShield,
  FiPhone,
  FiCalendar,
  FiAward,
} from "react-icons/fi";
import { testsContext } from "../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";

import "./Users.css";

const Users = () => {
  const navigate = useNavigate();
  const { users, currentUser, handleCurrentUser } = useContext(testsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Función para obtener el nombre completo del usuario
  const getUserFullName = (user) => {
    if (user.userName) return user.userName;
    return "Nombre no disponible";
  };

  // Filtrar y ordenar usuarios
  const filteredUsers = useMemo(() => {
    return users
      .filter((user) => {
        const searchContent = `${getUserFullName(user)} ${
          user.email
        }`.toLowerCase();
        return searchContent.includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => {
        const nameA = getUserFullName(a).toLowerCase();
        const nameB = getUserFullName(b).toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
  }, [users, searchTerm]);

  // Paginación
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleUser = (user) => {
    handleCurrentUser(user);
    navigate("/admin_user");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ud-container">
      <Navbar />

      <main className="ud-main">
        <div className="ud-header">
          <h1 className="ud-title">Administración de Usuarios</h1>
          <div className="ud-search-container">
            <FiSearch className="ud-search-icon" />
            <input
              type="text"
              placeholder="Buscar por nombre o email..."
              className="ud-search-input"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="ud-stats">
          <div className="ud-stat-card">
            <FiUser className="ud-stat-icon" />
            <div>
              <span className="ud-stat-number">{filteredUsers.length}</span>
              <span className="ud-stat-label">Usuarios totales</span>
            </div>
          </div>
          <div className="ud-stat-card">
            <FiShield className="ud-stat-icon" />
            <div>
              <span className="ud-stat-number">
                {filteredUsers.filter((u) => u.roles === "admin").length}
              </span>
              <span className="ud-stat-label">Administradores</span>
            </div>
          </div>
          <div className="ud-stat-card">
            <FiPhone className="ud-stat-icon" />
            <div>
              <span className="ud-stat-number">
                {filteredUsers.filter((u) => u.data?.cellphone).length}
              </span>
              <span className="ud-stat-label">Con teléfono</span>
            </div>
          </div>
        </div>

        <div className="ud-table-container">
          <table className="ud-table">
            <thead className="ud-table-header">
              <tr>
                <th className="ud-th">#</th>
                <th className="ud-th">Nombre</th>
                <th className="ud-th">Email</th>

                <th className="ud-th">Rol</th>
                <th className="ud-th">Estado</th>
              </tr>
            </thead>
            <tbody className="ud-table-body">
              {currentUsers.length > 0 ? (
                currentUsers.map((user, index) => (
                  <tr
                    key={user._id}
                    className="ud-tr"
                    onClick={() => handleUser(user)}
                  >
                    <td className="ud-td">{indexOfFirstUser + index + 1}</td>
                    <td className="ud-td ud-user-name">
                      <FiUser className="ud-user-icon" />
                      {getUserFullName(user)}
                    </td>
                    {/* <td className="ud-td ud-user-email">
                      <FiMail className="ud-email-icon" />
                      {user.email}
                    </td> */}
                    <td className="ud-td ud-user-phone">
                      {user.email || "N/A"}
                    </td>
                    <td className="ud-td">
                      <span className={`ud-role ${user.roles}`}>
                        {user.roles}
                      </span>
                    </td>
                    <td className="ud-td">
                      <span
                        className={`ud-status ${
                          user.data?.state || "inactive"
                        }`}
                      >
                        <FiAward className="ud-status-icon" />
                        {user.data?.state === "active" ? "Activo" : "Inactivo"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="ud-tr-empty">
                  <td colSpan="6" className="ud-td-empty">
                    No se encontraron usuarios
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {filteredUsers.length > usersPerPage && (
          <div className="ud-pagination">
            <button
              className="ud-pagination-button"
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
            >
              <FiChevronLeft />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  className={`ud-pagination-button ${
                    currentPage === number ? "active" : ""
                  }`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              )
            )}

            <button
              className="ud-pagination-button"
              onClick={() =>
                paginate(
                  currentPage < totalPages ? currentPage + 1 : totalPages
                )
              }
              disabled={currentPage === totalPages}
            >
              <FiChevronRight />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Users;

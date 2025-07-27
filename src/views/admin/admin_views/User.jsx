import React, { useState, useContext, useEffect } from "react";
import { testsContext } from "../../../context/TestsContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/landing/header/Navbar";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiShield,
  FiCheckCircle,
  FiCalendar,
  FiEdit,
  FiSave,
  FiX,
  FiPlus,
  FiHash,
  FiAlertCircle,
} from "react-icons/fi";
import { getAllUsers, updateUser } from "../../../services/userServices";
import "./User.css";

const User = () => {
  const navigate = useNavigate();
  const { currentUser, handleUsers, handleCurrentUser } =
    useContext(testsContext);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [newApp, setNewApp] = useState("");
  const [error, setError] = useState(null);
  const [availableApps, setAvailableApps] = useState([
    "translation",
    "rotation",
    "jump",
    "balance",
    "strength",
    "flexibility",
    "endurance",
  ]);

  useEffect(() => {
    setEditedUser({
      ...currentUser,
      data: currentUser.data || {},
    });
  }, [currentUser]);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleEditToggle = () => {
    setEditing(!editing);
    setError(null);
  };

  const handleInputChange = (field, value) => {
    if (field === "email") {
      setError(null);
    }

    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setEditedUser((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setEditedUser((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleAppToggle = (app) => {
    setEditedUser((prev) => ({
      ...prev,
      apps: {
        ...prev.apps,
        [app]: !prev.apps?.[app],
      },
    }));
  };

  const handleAddApp = () => {
    if (newApp && !editedUser.apps?.[newApp]) {
      setEditedUser((prev) => ({
        ...prev,
        apps: {
          ...prev.apps,
          [newApp]: true,
        },
      }));
      setNewApp("");
    }
  };

  const handleSave = async () => {
    try {
      setError(null);

      if (!editedUser.email || !editedUser.email.includes("@")) {
        setError("Por favor ingrese un email válido");
        return;
      }

      const updateData = {
        userName: editedUser.userName,
        email: editedUser.email,
        mobCode: editedUser.mobCode,
        roles: editedUser.roles,
        level: editedUser.level,
        apps: editedUser.apps,
        verified: editedUser.verified,
        data: {
          name: editedUser.data?.name,
          surname: editedUser.data?.surname,
          cellphone: editedUser.data?.cellphone,
          state: editedUser.data?.state,
        },
        payday: editedUser.payday,
        initialDate: editedUser.initialDate,
      };

      const res = await updateUser(currentUser._id, updateData);

      if (res.success) {
        const data = await getAllUsers();
        handleUsers(data);
        const current = data.find((user) => user._id === currentUser._id);
        handleCurrentUser(current);
        setEditing(false);
      } else {
        throw new Error(res.message || "Error al actualizar usuario");
      }
    } catch (error) {
      console.error("Error updating user:", error);

      if (
        error.message.includes("E11000 duplicate key error") ||
        error.message.includes("DuplicateKey")
      ) {
        setError(
          "El email ya está en uso por otro usuario. Por favor use un email diferente."
        );
      } else {
        setError(`Error al actualizar: ${error.message}`);
      }
    }
  };

  const renderField = (label, value, field, isEditable = true) => {
    return (
      <div className="up-field">
        <div className="up-field-label">{label}</div>
        {editing && isEditable ? (
          <input
            type={label.includes("Fecha") ? "date" : "text"}
            value={value || ""}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className="up-field-input"
          />
        ) : (
          <div className="up-field-value">
            {label.includes("Fecha")
              ? formatDate(value)
              : typeof value === "boolean"
              ? value
                ? "Sí"
                : "No"
              : value || "N/A"}
          </div>
        )}
      </div>
    );
  };

  const renderSelectField = (label, value, field, options) => {
    return (
      <div className="up-field">
        <div className="up-field-label">{label}</div>
        {editing ? (
          <select
            value={value}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className="up-field-select"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <div className="up-field-value">
            {options.find((opt) => opt.value === value)?.label ||
              value ||
              "N/A"}
          </div>
        )}
      </div>
    );
  };

  const renderApps = () => {
    const currentApps = editedUser.apps || {};

    return (
      <div className="up-apps-row">
        <h3 className="up-section-title">
          <FiHash className="up-section-icon" />
          Aplicaciones Habilitadas
        </h3>
        <div className="up-apps-grid">
          {Object.entries(currentApps).map(
            ([app, enabled]) =>
              enabled && (
                <div key={app} className="up-app-card">
                  <div className="up-app-name">{app}</div>
                  {editing && (
                    <button
                      onClick={() => handleAppToggle(app)}
                      className="up-app-remove"
                    >
                      <FiX />
                    </button>
                  )}
                </div>
              )
          )}
        </div>

        {editing && (
          <div className="up-add-app">
            <select
              value={newApp}
              onChange={(e) => setNewApp(e.target.value)}
              className="up-app-select"
            >
              <option value="">Seleccionar app</option>
              {availableApps
                .filter((app) => !editedUser.apps?.[app])
                .map((app) => (
                  <option key={app} value={app}>
                    {app}
                  </option>
                ))}
            </select>
            <button onClick={handleAddApp} className="up-add-app-button">
              <FiPlus /> Agregar
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderCounters = () => {
    return (
      <div className="up-counters-container">
        <div className="up-counter-card">
          <div className="up-counter-value">
            {currentUser.clientId?.length || 0}
          </div>
          <div className="up-counter-label">Clientes</div>
        </div>
        <div className="up-counter-card">
          <div className="up-counter-value">
            {currentUser.motionId?.length || 0}
          </div>
          <div className="up-counter-label">Movimientos</div>
        </div>
      </div>
    );
  };

  return (
    <div className="up-container">
      <Navbar />

      <main className="up-main">
        <div className="up-header">
          <h1 className="up-title">
            <FiUser className="up-title-icon" />
            Perfil de Usuario
          </h1>

          <div className="up-actions">
            {editing ? (
              <>
                <button
                  onClick={handleSave}
                  className="up-action-button up-save"
                >
                  <FiSave /> Guardar
                </button>
                <button
                  onClick={handleEditToggle}
                  className="up-action-button up-cancel"
                >
                  <FiX /> Cancelar
                </button>
              </>
            ) : (
              <button
                onClick={handleEditToggle}
                className="up-action-button up-edit"
              >
                <FiEdit /> Editar Perfil
              </button>
            )}
          </div>
        </div>

        {error && (
          <div className="up-error-message">
            <FiAlertCircle className="up-error-icon" />
            {error}
          </div>
        )}

        {renderApps()}

        <div className="up-two-columns">
          <div className="up-profile-card">
            <h2 className="up-section-title">
              <FiUser className="up-section-icon" />
              Información Básica
            </h2>

            <div className="up-fields-grid">
              {renderField("Nombre", editedUser.data?.name, "data.name")}
              {renderField(
                "Apellido",
                editedUser.data?.surname,
                "data.surname"
              )}
              {renderField("Email", editedUser.email, "email")}
              {renderField(
                "Teléfono",
                editedUser.data?.cellphone,
                "data.cellphone"
              )}
              {renderField("Usuario", editedUser.userName, "userName")}
              {renderField("Código Móvil", editedUser.mobCode, "mobCode")}
            </div>
          </div>

          <div className="up-profile-card">
            <h2 className="up-section-title">
              <FiShield className="up-section-icon" />
              Configuración de Cuenta
            </h2>

            <div className="up-fields-grid">
              {renderSelectField("Rol", editedUser.roles, "roles", [
                { value: "reader", label: "Lector" },
                { value: "editor", label: "Editor" },
              ])}
              {renderSelectField(
                "Verificado",
                editedUser.verified,
                "verified",
                [
                  { value: true, label: "Sí" },
                  { value: false, label: "No" },
                ]
              )}
              {renderSelectField("Nivel", editedUser.level, "level", [
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
              ])}
              {renderSelectField(
                "Estado",
                editedUser.data?.state,
                "data.state",
                [
                  { value: "active", label: "Activo" },
                  { value: "inactive", label: "Inactivo" },
                ]
              )}
              {renderField("Fecha de Pago", editedUser.payday, "payday")}
              {renderField(
                "Fecha de Inicio",
                editedUser.initialDate,
                "initialDate"
              )}
            </div>
          </div>
        </div>

        <div className="up-profile-card up-counters-section">
          <h2 className="up-section-title">
            <FiHash className="up-section-icon" />
            Estadísticas
          </h2>
          {renderCounters()}
        </div>
      </main>
    </div>
  );
};

export default User;

import { useNavigate } from "react-router-dom";
import { testsContext } from "../../context/TestsContext";
import { useContext } from "react";
import AdminItems from "../../components/admin/AdminItems";
import Navbar from "../../components/landing/header/Navbar";
import { motion } from "framer-motion";
import {
  FiSettings,
  FiUserPlus,
  FiUsers,
  FiDatabase,
  FiBarChart2,
  FiShield,
} from "react-icons/fi";
import "./AdminProfile.css";

const AdminPanel = () => {
  const { user } = useContext(testsContext);
  const navigate = useNavigate();

  const adminOptions = [
    { title: "Users", icon: <FiUsers />, path: "/admin_users" },
    { title: "Crear usuario", icon: <FiUserPlus />, path: "/create_user" },
    {
      title: "Estadísticas",
      icon: <FiBarChart2 />,
      path: "/construction_page",
    },
    // {
    //   title: "Configuración",
    //   icon: <FiSettings />,
    //   path: "/construction_page",
    // },
    // {
    //   title: "Base de datos",
    //   icon: <FiDatabase />,
    //   path: "/construction_page",
    // },
    // { title: "Seguridad", icon: <FiShield />, path: "/construction_page" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="admin-panel-container">
      <header>
        <Navbar />
      </header>

      <motion.section
        className="admin-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="admin-header">
          <div className="avatar-container">
            <motion.div
              className="admin-avatar"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
            >
              {/* <div className="avatar-gradient"></div> */}
              <span className="avatar-initial">
                {user.userName.charAt(0).toUpperCase()}
              </span>
            </motion.div>
          </div>

          <motion.h1
            className="admin-title"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            {user.userName}
          </motion.h1>

          <motion.h2
            className="admin-subtitle"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            Panel de Administrador
          </motion.h2>
        </div>

        <motion.div
          className="admin-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {adminOptions.map((item, index) => (
            <AdminItems
              key={item.title}
              title={item.title}
              icon={item.icon}
              path={item.path}
              index={index}
            />
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AdminPanel;

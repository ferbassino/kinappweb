import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiTool,
  FiClock,
  FiMail,
  FiHome,
  FiCoffee,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import "./ConstructionPage.css";

const ConstructionPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cards = [
    {
      icon: <FiTool size={32} />,
      title: "Desarrollo en Progreso",
      text: "Estamos trabajando duro para crear algo increíble para ti.",
    },
    {
      icon: <FiClock size={32} />,
      title: "Disponible Pronto",
      text: "Estamos en la fase final de desarrollo. ¡No falta mucho!",
    },
    {
      icon: <FiMail size={32} />,
      title: "Contáctanos",
      text: "¿Quieres saber más? Envíanos un mensaje y te mantendremos informado.",
    },
  ];

  return (
    <div className="construction-page">
      {/* Background elements */}
      <div className="construction-bg-elements">
        <div className="construction-bg-circle"></div>
        <div className="construction-bg-grid"></div>
      </div>

      {/* Main content */}
      <motion.div
        className="construction-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header section */}
        <motion.div className="construction-header" variants={itemVariants}>
          <motion.div
            className="construction-icon-wrapper"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FiLayers className="construction-main-icon" />
          </motion.div>
          <motion.h1 className="construction-title" variants={itemVariants}>
            Sitio en Construcción
          </motion.h1>
          <motion.p className="construction-subtitle" variants={itemVariants}>
            Estamos preparando algo extraordinario
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="construction-progress-container"
          variants={itemVariants}
        >
          <div className="construction-progress-bar">
            <motion.div
              className="construction-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: "76%" }}
              transition={{
                duration: 2,
                delay: 0.8,
                ease: "easeInOut",
              }}
            >
              <div className="construction-progress-glow"></div>
            </motion.div>
          </div>
          <motion.span
            className="construction-progress-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            76% completado
          </motion.span>
        </motion.div>

        {/* Cards section */}
        <motion.div className="construction-cards" variants={itemVariants}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="construction-card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
              }}
            >
              <div className="construction-card-icon">{card.icon}</div>
              <h3 className="construction-card-title">{card.title}</h3>
              <p className="construction-card-text">{card.text}</p>
              <div className="construction-card-glow"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer section */}
        <motion.div className="construction-footer" variants={itemVariants}>
          <NavLink to="/admin_panel" className="construction-navlink">
            <motion.button
              className="construction-button"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FiHome className="construction-button-icon" />
              Volver al Panel de Administración
            </motion.button>
          </NavLink>

          <div className="construction-social-links">
            <motion.a
              href="#"
              className="construction-social-link"
              whileHover={{ y: -3 }}
            >
              <FiCoffee />
            </motion.a>
            <motion.a
              href="#"
              className="construction-social-link"
              whileHover={{ y: -3 }}
            >
              <FiCode />
            </motion.a>
            <motion.a
              href="#"
              className="construction-social-link"
              whileHover={{ y: -3 }}
            >
              <FiMail />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <div className="construction-floating-elements">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="construction-floating-element" />
        ))}
      </div>
    </div>
  );
};

export default ConstructionPage;

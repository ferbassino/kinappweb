import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiFrown, FiCompass } from "react-icons/fi";
import "./Error404.css";

const Error404 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
    transition: { duration: 0.3 },
  };

  const tapEffect = {
    scale: 0.98,
  };

  return (
    <motion.div
      className="error-404-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="error-404-bg"></div>

      <motion.div
        className="error-404-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="error-404-illustration" variants={itemVariants}>
          <div className="error-404-circle">
            <FiFrown className="error-404-icon" />
          </div>
          <div className="error-404-particles">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="error-404-particle" />
            ))}
          </div>
        </motion.div>

        <motion.h1 className="error-404-title" variants={itemVariants}>
          404
        </motion.h1>

        <motion.p className="error-404-subtitle" variants={itemVariants}>
          ¡Ups! Página no encontrada
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.p className="error-404-message" variants={itemVariants}>
            La página que buscas no existe o ha sido movida.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <NavLink to="/" className="error-404-link">
            <motion.div
              className="error-404-button"
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              <FiArrowLeft className="error-404-button-icon" />
              <span>Volver</span>
              <div className="error-404-button-glow"></div>
            </motion.div>
          </NavLink>
        </motion.div>
      </motion.div>

      <div className="error-404-decoration">
        <div className="error-404-decoration-item"></div>
        <div className="error-404-decoration-item"></div>
        <div className="error-404-decoration-item"></div>
      </div>
    </motion.div>
  );
};

export default Error404;

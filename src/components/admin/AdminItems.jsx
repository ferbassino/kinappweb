import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./AdminItems.css";

const AdminItems = ({ title, icon, path, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
    },
  };

  const iconVariants = {
    hover: {
      rotate: 10,
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="admin-card-container"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onClick={handleClick}
    >
      <div className="admin-card-bg"></div>
      <div className="admin-card-content">
        <motion.div className="admin-card-icon" variants={iconVariants}>
          {icon}
        </motion.div>
        <h3 className="admin-card-title">{title}</h3>
      </div>
      <div className="admin-card-glow"></div>
    </motion.div>
  );
};

export default AdminItems;

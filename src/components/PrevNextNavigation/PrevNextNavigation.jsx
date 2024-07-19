import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PrevNextNavigation.css";

function DocsNavigation({ routes, endPointsArray }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [endPoint, setEndPoint] = useState("");
  const currentIndex = routes.indexOf(location.pathname);

  const handleNext = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const handlePrev = (currentIndex) => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  return (
    <div className="docs-navigation-button-container">
      <button
        className={`docs-navigation-button ${
          currentIndex === 0
            ? "docs-navigation-button-disabled"
            : "docs-navigation-button"
        }`}
        // className="docs-navigation-button"
        onClick={() => handlePrev(currentIndex)}
        disabled={currentIndex === 0}
      >
        ⏪ {endPointsArray[currentIndex - 1]}
      </button>
      <button
        className={`docs-navigation-button ${
          currentIndex === routes.length - 1
            ? "docs-navigation-button-disabled"
            : "docs-navigation-button"
        }`}
        // className="docs-navigation-button"
        onClick={handleNext}
        disabled={currentIndex === routes.length - 1}
      >
        {endPointsArray[currentIndex + 1]} ⏩
      </button>
    </div>
  );
}

export default DocsNavigation;

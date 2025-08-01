import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { TestsContextProvider } from "./context/TestsContext.jsx";
import ScrollToTop from "./components/basics/ScrollToTop.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <TestsContextProvider>
        <App />
      </TestsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

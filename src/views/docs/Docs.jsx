import { useRef } from "react";
import Navbar from "../../components/landing/header/Navbar";
import Footer from "../../components/landing/footer/Footer";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Docs.css";

function Docs() {
  return (
    <>
      <Navbar />
      <section className="docs-container">
        <header className="docs-header">Documentación</header>
        <aside className="docs-aside">
          <ul>
            <li>Ges started</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
            <li>introducción</li>
          </ul>
        </aside>
        <main className="docs-main">main</main>
      </section>

      <Footer />
    </>
  );
}

export default Docs;

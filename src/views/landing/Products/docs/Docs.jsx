import Navbar from "../../../../components/landing/header/Navbar";
import Footer from "../../../../components/landing/footer/Footer";
import { NavLink, Outlet } from "react-router-dom";

import "./Docs.css";
import { useEffect, useState } from "react";

function Docs() {
  const [navArray, setNavArray] = useState([]);
  const [url, setUrl] = useState("");

  const navItems = [
    { url: "docs_get_started", text: "Get started" },
    { url: "docs_apks", text: "Registrarse en kinApp" },
    { url: "docs_apks_gallery", text: "Aplicaciones móviles" },
    // { url: "docs_kinapp_web", text: "kinApp web" },
    // { url: "docs_apks", text: "Apks dsponibles" },
    // { url: "docs_biomechanics", text: "Biomecánica" },
  ];
  const navApksItems = [
    { url: "jump_docs", text: "Jump" },
    { url: "docs_get_started", text: "Artro" },
    { url: "docs_kinapp_web", text: "Clino" },
  ];
  const navBiomechanicsItems = [
    { url: "jump_docs", text: "1. Biomecánica paso a paso" },
    { url: "docs_get_started", text: "2. El salto vertical" },
    // { url: "docs_kinapp_web", text: "3. Caida libre" },
    // { url: "docs_kinapp_web", text: "4. El salto vertical" },
  ];

  useEffect(() => {
    switch (url) {
      case "docs_biomechanics":
        setNavArray(navBiomechanicsItems);
        break;
      case "docs_apks_gallery":
        // console.log(url);
        setNavArray(navApksItems);
        break;

      default:
        break;
    }
  }, [url]);

  return (
    <>
      <Navbar />
      <section className="docs-container">
        <header className="docs-header">Documentación</header>
        <aside className="docs-aside">
          <ul className="docs-nav-container">
            {navItems.map((el) => (
              <NavLink
                onClick={() => setUrl(el.url)}
                key={el.url}
                to={el.url}
                className={({ isActive }) =>
                  isActive ? "activeDocsNav" : "inactiveDocsNav"
                }
              >
                {el.text}
              </NavLink>
            ))}
          </ul>
          {/* {navApksItems.length !== 0 ? (
            <ul className="docs-nav-containerSecondary">
              {navArray.map((el) => (
                <NavLink
                  key={el.text}
                  to={el.url}
                  className={({ isActive }) =>
                    isActive
                      ? "activeDocsNavSecondary"
                      : "inactiveDocsNavSecondary"
                  }
                >
                  {el.text}
                </NavLink>
              ))}
            </ul>
          ) : (
            ""
          )} */}
        </aside>

        <main className="docs-main">
          <Outlet />
        </main>
      </section>

      <Footer />
    </>
  );
}

export default Docs;

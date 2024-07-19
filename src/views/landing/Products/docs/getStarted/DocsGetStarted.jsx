import DocsHeader from "../../../../../components/docs/DocsHeader";
import DocsItems from "../../../../../components/docs/DocsItems";
import "./../Docs.css";
import DocsBlock from "../../../../../components/docs/DocsBlock";
import DocsButton from "../../../../../components/docs/DocsButton";
import { useNavigate } from "react-router-dom";
import {
  aprenderas,
  recursosUsuario,
  webNavContent,
  webNavContent2,
  recursosKinapp,
  recursosKinappList,
  otrosRecursos,
} from "../../../../../auxiliaries/contents/docs/GetStarted";

import PrevNextNavigation from "./../../../../../components/PrevNextNavigation/PrevNextNavigation";
import {
  docsRoutes,
  docsEndPointsArray,
} from "../../../../../auxiliaries/navigationRoutes/docRoutes/docsRoutes";

function DocsGetStarted() {
  const navigate = useNavigate();

  const handleKinAppWeb = () => {
    navigate("/docs/docs_kinapp_web");
  };

  return (
    <>
      <header>
        <DocsHeader
          title="Inicio rápido"
          subTitle="¡Bienvenido a al documentación de kinApp! En esta página encontrarás información para la utilización de la aplicación web, las aplicaciones móviles y documentación biomecánica relevante"
        />
      </header>
      <section className="docs-section">
        <DocsItems title="Aprenderás" array={aprenderas} />
        <DocsBlock title="Navegación de kinApp" arrayContent={webNavContent} />
        <DocsItems title="Recursos del usuario" array={recursosUsuario} />

        {/* <DocsButton
          text="mas sobre navegar..."
          handleButton={handleKinAppWeb}
        /> */}
        <DocsBlock title="Recursos kinApp" arrayContent={recursosKinapp} />
        <DocsItems title="Recursos kinapp" array={recursosKinappList} />
        <DocsBlock title="Otros recursos" arrayContent={otrosRecursos} />

        <PrevNextNavigation
          routes={docsRoutes}
          endPointsArray={docsEndPointsArray}
        />
      </section>
    </>
  );
}

export default DocsGetStarted;

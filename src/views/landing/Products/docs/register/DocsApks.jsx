import PrevNextNavigation from "../../../../../components/PrevNextNavigation/PrevNextNavigation";
import DocsHeader from "../../../../../components/docs/DocsHeader";
import DocsDescription from "../../../../../components/docs/DocsDescription";

import {
  registerRoutesEndpoints,
  registerRoutesName,
} from "../../../../../auxiliaries/navigationRoutes/docRoutes/docsRoutes";

import DocsItems from "../../../../../components/docs/DocsItems";
import { contentJumpDocsItems } from "../../../../../auxiliaries/contents/docs/apks/jump/jumpApksAuxiliaries";

import DocsBlockContentImage from "../../../../../components/docs/DocsblockContentImage";
import DocsButton from "../../../../../components/docs/DocsButton";
import { useNavigate } from "react-router-dom";
import DocsSubtitle from "../../../../../components/docs/DocsSubtitle";

export default function DocsApks() {
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate("/downloads");
  };
  return (
    <>
      <PrevNextNavigation
        routes={registerRoutesEndpoints}
        endPointsArray={registerRoutesName}
      />
      <DocsHeader
        title="Tutorial de registro al entorno"
        subTitle="En esta sección vamos a describir el proceso de instalación y suscripción a través de la aplicación móvil y de la aplicación web."
      />
      <DocsDescription description="Para poder utilizar los recursos que ofrece kinApp debemos estar registrados en el entorno. En este tutorial vamos a recorrer todos los pasos para el registro, ingreso y recuperación de contraseña. Este proceso se puede realizar tanto en la aplicación móvil como en la web." />
      <DocsItems
        title="En esta documentación vamos a ver:"
        array={contentJumpDocsItems}
      />
      <DocsBlockContentImage
        title="1. Descarga de la app"
        subtitle="Para descargar la app haz click en el botón de abajo. Utilizaremos como ejemplo a la aplicación de análisis del salto vertical 'Jump'"
        content="Importante: para popder descargar la app y utilizarla se debe ser usuario de kinApp"
      />
      <DocsButton text="Ir a descargar Jump" handleButton={handleDownload} />
      <DocsSubtitle subtitle="Una vez descargada e instalada la aplicación seguimos con el logueo o suscripción..." />
      <PrevNextNavigation
        routes={registerRoutesEndpoints}
        endPointsArray={registerRoutesName}
      />
    </>
  );
}

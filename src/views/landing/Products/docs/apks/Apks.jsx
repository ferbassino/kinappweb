import GalleryContainer from "../../../../../components/galery/GalleryContainer";
import { apks } from "../../../../../auxiliaries/contents/docs/apks/apks";
import { useNavigate } from "react-router-dom";
import PrevNextNavigation from "../../../../../components/PrevNextNavigation/PrevNextNavigation";
import {
  docsRoutes,
  docsEndPointsArray,
} from "../../../../../auxiliaries/navigationRoutes/docRoutes/docsRoutes";

function Apks() {
  const navigate = useNavigate();
  const title = "Aplicaciones móviles";
  const subTitle =
    "Selecciona una aplicación móvil para acceder a la documentación";

  const handleCourse = (el) => {
    switch (el.id) {
      case 1:
        navigate("/docs/jump_docs");
        break;
      case 2:
        navigate("/artro_docs");
        break;
      case 3:
        navigate("/clino_docs");
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <GalleryContainer
        title={title}
        subTitle={subTitle}
        array={apks}
        handleCourse={handleCourse}
      />
      <PrevNextNavigation
        routes={docsRoutes}
        endPointsArray={docsEndPointsArray}
      />
    </div>
  );
}

export default Apks;

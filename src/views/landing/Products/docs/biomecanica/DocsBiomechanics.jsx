import PrevNextNavigation from "./../../../../../components/PrevNextNavigation/PrevNextNavigation";
import {
  docsRoutes,
  docsEndPointsArray,
} from "../../../../../auxiliaries/navigationRoutes/docRoutes/docsRoutes";
function DocsBiomechanics() {
  return (
    <div>
      Biomecanica
      <PrevNextNavigation
        routes={docsRoutes}
        endPointsArray={docsEndPointsArray}
      />
    </div>
  );
}

export default DocsBiomechanics;

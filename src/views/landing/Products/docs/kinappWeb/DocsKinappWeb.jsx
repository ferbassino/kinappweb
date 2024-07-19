import PrevNextNavigation from "./../../../../../components/PrevNextNavigation/PrevNextNavigation";
import {
  docsRoutes,
  docsEndPointsArray,
} from "../../../../../auxiliaries/navigationRoutes/docRoutes/docsRoutes";
function DocsKinappWeb() {
  return (
    <div>
      kinappweb
      <PrevNextNavigation
        routes={docsRoutes}
        endPointsArray={docsEndPointsArray}
      />
    </div>
  );
}

export default DocsKinappWeb;

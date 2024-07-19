import PrevNextNavigation from "./../../../../../../components/PrevNextNavigation/PrevNextNavigation";

import {
  jumpRoutes,
  jumpEndPointsArray,
} from "../../../../../../auxiliaries/navigationRoutes/jumpRoutes/jumpRoutes";

const Download = () => {
  return (
    <>
      <h1>Download</h1>
      <PrevNextNavigation
        routes={jumpRoutes}
        endPointsArray={jumpEndPointsArray}
      />
    </>
  );
};
export default Download;

import PrevNextNavigation from "./../../../../../../../components/PrevNextNavigation/PrevNextNavigation";

import {
  jumpRoutes,
  jumpEndPointsArray,
} from "../../../../../../../auxiliaries/navigationRoutes/jumpRoutes/jumpRoutes";

const Select = () => {
  return (
    <>
      <h1>Select</h1>
      <PrevNextNavigation
        routes={jumpRoutes}
        endPointsArray={jumpEndPointsArray}
      />
    </>
  );
};
export default Select;

import { Navigate, Outlet } from "react-router-dom";

const JumpCourse2024Routes = ({ roles, redirectPath = "/" }) => {
  if (roles !== "jumpCourse2024") {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default JumpCourse2024Routes;

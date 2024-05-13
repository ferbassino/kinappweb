import { Navigate, Outlet } from "react-router-dom";

const ReaderRoutes = ({ roles, redirectPath = "/" }) => {
  if (roles !== "jumpCourse2024") {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ReaderRoutes;

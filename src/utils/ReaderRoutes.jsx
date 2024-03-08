import { Navigate, Outlet } from "react-router-dom";

const ReaderRoutes = ({ roles, redirectPath = "/" }) => {
  if (roles !== "reader") {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ReaderRoutes;

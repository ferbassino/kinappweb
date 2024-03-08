import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = ({ roles, redirectPath = "/" }) => {
  if (roles !== "admin") {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default AdminRoutes;

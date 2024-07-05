import { Navigate, Outlet } from "react-router-dom";

const ReaderRoutes = ({ roles, redirectPath = "/" }) => {
  if (roles === "reader" || roles === "editor") {
    return <Outlet />;
  }
  return <Navigate to={redirectPath} replace />;
};
// const ReaderRoutes = ({ roles, redirectPath = "/" }) => {
//   if (roles !== "reader") {
//     return <Navigate to={redirectPath} replace />;
//   }
//   return <Outlet />;
// };

export default ReaderRoutes;

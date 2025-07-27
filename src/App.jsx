import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ReaderRoutes from "./utils/ReaderRoutes";
import LoginForm from "./views/forms/LoginForm";
import Register from "./views/forms/Register";
import Landing from "./views/landing/Landing";
import { testsContext } from "./context/TestsContext";
import { useContext } from "react";
import JumpView from "./views/testsView/JumpView";
import ForgotPassword from "./views/forms/ForgotPassword";
import AdminRoutes from "./utils/AdminRoutes";
import AdminPanel from "./views/admin/AdminPanel";
import Users from "./views/admin/admin_views/Users";
import User from "./views/admin/admin_views/User";
import ExpiredRoleMessage from "./components/messages/ExpiredRoleMessage";
import Verification from "./views/forms/Verification";

import Error404 from "./components/basics/Error404";

import Baja from "./views/forms/Baja";
import CreateUser from "./views/forms/crateUser/createUser";
import ConstructionPage from "./views/ConstructionPage/ConstructionPage";

function App() {
  const { user } = useContext(testsContext);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login_form" element={<LoginForm />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/baja" element={<Baja />} />
      <Route path="/expired_role_message" element={<ExpiredRoleMessage />} />
      <Route path="/verification/:userId" element={<Verification />} />
      <Route path="/jump_view" element={<JumpView />} />
      <Route element={<AdminRoutes roles={user.roles} />}>
        <Route path="/admin_panel" element={<AdminPanel />} />
        <Route path="/admin_users" element={<Users />} />
        <Route path="/admin_user" element={<User />} />
        <Route path="/create_user" element={<CreateUser />} />
        <Route path="/construction_page" element={<ConstructionPage />} />
      </Route>
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
}

export default App;

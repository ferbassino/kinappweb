import "./App.css";

import ReaderRoutes from "./utils/ReaderRoutes";
import LoginForm from "./views/forms/LoginForm";
import Register from "./views/forms/Register";
import Landing from "./views/landing/Landing";
import { Routes, Route } from "react-router-dom";
import ReaderProfile from "./views/reader/ReaderProfile";
import { testsContext } from "./context/TestsContext";
import { useContext, useEffect, useState } from "react";
import ImuAnalysis from "./views/reader/readerViews/ImuAnalysis";
import Clases from "./views/reader/readerViews/Clases";
import JumpVideoAnalysis from "./views/reader/readerViews/JumpVideoAnalysis";
import Tests from "./views/reader/readerViews/Tests";
import JumpView from "./views/testsView/JumpView";
import Program from "./views/reader/readerViews/Program";
import About from "./views/landing/about/About";
import Cursos from "./views/landing/capacitaciones/Cursos";
import QuienesSomos from "./views/landing/conocenos/QuienesSomos";
import WebApplication from "./views/landing/recursos-kinapp/WebApplication";
import AvisoLegal from "./views/landing/mas/AvisoLegal";
import Downloads from "./views/landing/descargas/Downloads";
import ForgotPassword from "./views/forms/ForgotPassword";
import AdminRoutes from "./utils/AdminRoutes";
import AdminPanel from "./views/admin/AdminPanel";
import Users from "./views/admin/admin_views/Users";
import User from "./views/admin/admin_views/User";
import ExpiredRoleMessage from "./components/messages/ExpiredRoleMessage";

function App() {
  const { user } = useContext(testsContext);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login_form" element={<LoginForm />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Cursos />} />
      <Route path="/about_us" element={<QuienesSomos />} />
      <Route path="/web_application" element={<WebApplication />} />
      <Route path="/aviso_legal" element={<AvisoLegal />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/expired_role_message" element={<ExpiredRoleMessage />} />
      <Route element={<ReaderRoutes roles={user.roles} />}>
        <Route path="/reader_profile" element={<ReaderProfile />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/jump_video_analysis" element={<JumpVideoAnalysis />} />
        <Route path="/imu_analysis" element={<ImuAnalysis />} />
        <Route path="/jump_view" element={<JumpView />} />
        <Route path="/jump_program" element={<Program />} />
        {/* <Route path="/success-verification" element={<SuccessVerification />} /> */}
        <Route path="/tests" element={<Tests />} />
        {/* <Route path="/jump_test" element={<JumpTest />} /> */}
      </Route>
      <Route element={<AdminRoutes roles={user.roles} />}>
        <Route path="/admin_panel" element={<AdminPanel />} />
        <Route path="/admin_users" element={<Users />} />
        <Route path="/admin_user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;

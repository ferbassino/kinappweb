import "./App.css";

import ReaderRoutes from "./utils/ReaderRoutes";
import LoginForm from "./views/forms/LoginForm";
import Register from "./views/forms/Register";
import Landing from "./views/landing/Landing";
import { Routes, Route } from "react-router-dom";
import ReaderProfile from "./views/reader/ReaderProfile";
import { testsContext } from "./context/TestsContext";
import { useContext } from "react";
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
function App() {
  const { roles } = useContext(testsContext);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login_form" element={<LoginForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Cursos />} />
      <Route path="/about_us" element={<QuienesSomos />} />
      <Route path="/web_application" element={<WebApplication />} />
      <Route path="/aviso_legal" element={<AvisoLegal />} />
      <Route element={<ReaderRoutes roles={roles} />}>
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
    </Routes>
  );
}

export default App;

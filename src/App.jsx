import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Cursos from "./pages/Cursos";
import LoginForm from "./pages/LoginForm";
import KinApp from "./pages/KinApp";
import Users from "./pages/Users";
import User from "./components/User";
import { useState } from "react";
import NavBar from "./components/Navbar";
import logout from "./services/logout";
import login from "./services/login";
import { useLogin } from "./context/LoginProvider";
import About from "./pages/About";
import JumpCourse from "./pages/JumpCourse";
import CourseForm from "./pages/CourseForm";
import AdminRoutes from "./utils/AdminRoutes";
import UserJC24Profile from "./pages/UserJC24Profile";
import Reader from "./pages/Reader";
import JumpCourse2024Routes from "./utils/JumpCourse2024";
import ReaderRoutes from "./utils/ReaderRoutes";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { profile, setProfile, setErrorMessage } = useLogin();
  const [error, setError] = useState(false);
  const [roles, setRoles] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({
        email,
        password,
      });
      if (data) {
        setProfile(data);
        setRoles(data.roles);
        console.log(data.roles);
        if (data.roles === "admin") {
          navigate("/profile");
        }
        if (data.roles === "jumpCourse2024") {
          navigate("/userJC24Profile");
        }
        if (data.roles === "reader") {
          navigate("/reader");
        }

        setPassword("");
        setEmail("");
      } else {
        setError(true);
        setErrorMessage("Email o password incorrectos");
        setTimeout(() => {
          setPassword("");
          setEmail("");
          setErrorMessage(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setProfile({});
    logout();
  };

  return (
    <Layout>
      <NavBar handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<KinApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route
          path="/Login_form"
          element={
            <LoginForm
              error={error}
              email={email}
              password={password}
              handleOnchangeEmail={(e) => setEmail(e.target.value)}
              handleOnchangePassword={(e) => setPassword(e.target.value)}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/jump_course" element={<JumpCourse />} />
        <Route path="/jump_course" element={<JumpCourse />} />
        <Route path="/course_form" element={<CourseForm />} />
        <Route path="*" element={<Navigate to="/"></Navigate>} />

        {/* protected admin routes */}
        <Route element={<AdminRoutes roles={roles} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
        </Route>

        {/* protected reader users routes */}
        <Route element={<JumpCourse2024Routes roles={roles} />}>
          <Route path="/userJC24Profile" element={<UserJC24Profile />} />
        </Route>
        <Route element={<ReaderRoutes roles={roles} />}>
          <Route path="/reader" element={<Reader />} />
        </Route>
      </Routes>

      <Footer />
    </Layout>
  );
}

export default App;

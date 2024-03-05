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

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setProfile, setErrorMessage } = useLogin();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({
        email,
        password,
      });
      if (data) {
        setProfile(data);
        navigate("/profile");
        setPassword("");
        setEmail("");
      } else {
        setError(true);
        setErrorMessage("Email o password incorrectos");
        setTimeout(() => {
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/jump_course" element={<JumpCourse />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<Navigate to="/"></Navigate>} />
      </Routes>

      <Footer />
    </Layout>
  );
}

export default App;

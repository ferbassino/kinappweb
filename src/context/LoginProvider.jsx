import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../api/client";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [loginPending, setLoginPending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [roles, setRoles] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("user");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setProfile(user);
      setRoles(user.roles);

      const fetchUser = async () => {
        if (user.token !== null) {
          const res = await client.get("/profile", {
            headers: {
              Authorization: `JWT ${user.token}`,
            },
          });

          if (!res.data.verified) {
            setErrorMessage("perfil no verificado");
            setTimeout(() => {
              setErrorMessage(false);
            }, 5000);
            return;
          }

          if (res.data.success) {
            setProfile(res.data);
            if (user.roles === "admin") {
              navigate("/profile");
            }
            if (user.roles === "jumpCourse2024") {
              navigate("/userJC24Profile");
            }
            if (user.roles === "reader") {
              navigate("/reader");
            }
          } else {
            setProfile({});
            navigate("/");
          }
        }
      };
      fetchUser();
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profile,
        setProfile,
        loginPending,
        setLoginPending,
        isVerified,
        errorMessage,
        setErrorMessage,
        roles,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;

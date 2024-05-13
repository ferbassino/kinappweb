import { useEffect, useState, createContext, useContext } from "react";
import { getAllTests } from "../services/testsServices";
import { initialTest } from "../services/initialTests";
import { getAllUsers } from "../services/userServices";
import { getAllClients } from "../services/clientServices";
import client from "../api/client";
import { useNavigate } from "react-router-dom";
import logout from "../services/logout";
export const testsContext = createContext();

export const TestsContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [users, setUsers] = useState([]);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [roles, setRoles] = useState("");
  const [currentTest, setCurrentTest] = useState([]);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("user");

    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
      setRoles(user.roles);
      if (user.roles === "editor") {
        navigate("/reader_profile");
      }

      const fetchUser = async () => {
        if (user.token !== null) {
          const res = await client.get("/profile", {
            headers: {
              Authorization: `JWT ${user.token}`,
            },
          });

          // if (!res.data.verified) {
          //   setError("perfil no verificado");
          //   setTimeout(() => {
          //     setError(false);
          //   }, 5000);
          //   return;
          // }

          // if (res.data.success) {
          //   setUser(res.data.user);
          //   if (user.roles === "admin") {
          //     navigate("/admin");
          //   }
          //   if (user.roles === "jumpCourse2024") {
          //     navigate("/reader_profile");
          //   }
          //   if (user.roles === "reader") {
          //     console.log("entra a navegar");
          //     navigate("/reader_profile");
          //   }
          // } else {
          //   console.log("entra aca en el else");
          //   setUser({});
          //   navigate("/");
          // }
        }
      };
      fetchUser();
    }
  }, []);

  const fetchUsers = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchClients = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllClients();
      setClients(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTests = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllTests();
      setTests(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchTests();
    fetchClients();
    fetchUsers();
  }, []);

  // const handleUser = (user) => {
  //   setUser(user);
  // };
  const handleCurrentTest = (test) => {
    setCurrentTest(test);
  };
  const handleResetCurrentTest = () => {
    setCurrentTest({});
  };
  const handleUser = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    logout();
    setUser({ userName: "" });
  };

  return (
    <testsContext.Provider
      value={{
        users,
        clients,
        tests,
        isLoading,
        error,
        user,
        handleUser,
        roles,
        handleCurrentTest,
        currentTest,
        handleLogout,
        handleResetCurrentTest,
      }}
    >
      {children}
    </testsContext.Provider>
  );
};

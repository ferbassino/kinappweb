import { useEffect, useState, createContext, useContext } from "react";
import { getAllTests } from "../services/testsServices";
import { initialTest } from "../services/initialTests";
import { getAllUsers, updateUser } from "../services/userServices";
import { getAllClients } from "../services/clientServices";
import client from "../api/client";
import { useNavigate } from "react-router-dom";
import logout from "../services/logout";
import getDifferenceNowMonth from "../auxiliaries/basics/getDifferenceNowMonth";
import { getAllApps, getAllDownloadedJumps } from "../services/appsServices";
export const testsContext = createContext();

export const TestsContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [users, setUsers] = useState([]);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ userName: "", roles: "" });
  const [roles, setRoles] = useState("");
  const [currentTest, setCurrentTest] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [apps, setApps] = useState([]);
  const [downloadedJumpApp, setDownloadedJumpApp] = useState(0);

  useEffect(() => {
    setUser({ userName: "" });
    const loggedUser = window.localStorage.getItem("user");

    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      // if (!user.verified) {
      //   navigate("/");
      //   return;
      // }
      const fetchUser = async () => {
        if (user.token !== null) {
          const res = await client.get("/profile", {
            headers: {
              Authorization: `JWT ${user.token}`,
            },
          });
          if (res.data.success) {
            setUser(user);
            setRoles(user.roles);
            if (user.roles === "editor") {
              const { initialDate } = user;
              const diasDesdeInicio = getDifferenceNowMonth(initialDate);
              if (diasDesdeInicio > 31 && user.level === "cero") {
                const changeExpiredRole = async () => {
                  try {
                    const id = user.id;
                    const values = {
                      roles: "reader",
                    };

                    const res = await updateUser(id, values);

                    if (res.success) {
                      localStorage.removeItem("user");
                      logout();
                    }
                  } catch (error) {
                    console.log(error);
                  }
                };
                changeExpiredRole();
              }
              navigate("/reader_profile");
            }

            if (user.roles === "admin") {
              navigate("/admin_panel");
            }
          }
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
  const fetchDownloadsJump = async () => {
    try {
      setError(null);
      setIsLoading(true);

      const data = await getAllDownloadedJumps();

      setDownloadedJumpApp(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchApps = async () => {
    try {
      setError(null);
      setIsLoading(true);

      const data = await getAllApps();

      setApps(data);
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
    fetchDownloadsJump();
    fetchApps();
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
  const handleUsers = (users) => {
    setUsers(users);
  };

  const handleLogout = () => {
    logout();
    setUser({ userName: "", verified: false });
  };
  const handleCurrentUser = (user) => {
    setCurrentUser(user);
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
        currentUser,
        handleCurrentUser,
        handleUsers,
        downloadedJumpApp,
        apps,
      }}
    >
      {children}
    </testsContext.Provider>
  );
};

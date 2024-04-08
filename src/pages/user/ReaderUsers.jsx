import { useEffect, useState } from "react";
import { getUsers } from "../../requests/getUser";
import UserList from "../../components/user/UsersList";
import HashLoader from "react-spinners/HashLoader";
import "./JumpCourseUsers.css";

const ReaderUsers = () => {
  const [users, setUsers] = useState([]);
  const [verifiedUsers, setVerifiedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      const users = async () => {
        const users = await getUsers();
        const readerUsers = users.filter((el) => el.roles === "reader");
        const verifiedReaderUsers = users.filter(
          (el) => el.roles === "reader" && el.verified
        );
        if (users) {
          setVerifiedUsers(verifiedReaderUsers);
          setUsers(readerUsers);
          setLoading(false);
        }
        setLoading(false);
      };
      users();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="spinner-Container">
            <HashLoader
              color={"#011a42"}
              loading={loading}
              cssOverride={{
                display: "block",
                margin: "0 auto",
                borderColor: "#011a42",
              }}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-gray-900 text-lg title-font font-medium my-5 text-center">
            Usuarios con rol "READER"
          </h1>
          <div className="flex flex-wrap">
            <span className="text-gray-900 mx-5 text-l title-font font-medium my-1">
              Total: {users.length} usuarios
            </span>
            <span className="text-gray-900 mx-5 text-l title-font font-medium my-1">
              Verificados: {verifiedUsers.length}
            </span>
            <span className="text-gray-900 mx-5 text-l title-font font-medium my-1">
              No verificados: {users.length - verifiedUsers.length}
            </span>
          </div>
        </>
      )}

      <UserList users={users} />
    </>
  );
};

export default ReaderUsers;

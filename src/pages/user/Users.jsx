import { useEffect, useState } from "react";
import { getUsers } from "../../requests/getUser";
import UserList from "../../components/user/UsersList";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    users();
  }, []);

  return (
    <>
      <UserList users={users} />
    </>
  );
};

export default Users;

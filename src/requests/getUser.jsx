import client from "../api/client";

export const getUser = async (id) => {
  try {
    const res = await client.get(`/api/user/${id}`);
    if (res.data.success) {
      const user = res.data.user;

      return user;
    } else {
      return res.data.success;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const res = await client.get(`users`);
    if (res.data.success) {
      const users = res.data.users;
      return users;
    } else {
      return res.data.success;
    }
  } catch (error) {
    console.log(error);
  }
};

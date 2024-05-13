import client from "../api/client";

export const getAllUsers = async () => {
  const res = await client.get("/users");
  if (!res.data.success) throw new Error("Response not ok");
  const data = await res.data.users;

  return data;
};

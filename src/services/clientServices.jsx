import client from "../api/client";

export const getAllClients = async () => {
  const res = await client.get("/api/clients");
  if (!res.data.success) throw new Error("Response not ok");
  const data = await res.data.clients;

  return data;
};

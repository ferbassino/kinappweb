import client from "../../api/client";

export const getClients = (id) => {
  const response = client.get("/api/clients").then(() => {
    return response;
  });
};

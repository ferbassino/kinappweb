import client from "../api/client";

export const getAllClients = async () => {
  const res = await client.get("/api/clients");
  if (!res.data.success) throw new Error("Response not ok");
  const data = await res.data.clients;

  return data;
};

export const getJumpValidationClients = async () => {
  try {
    const res = await client.get("/api/clients");
    if (!res.data.success) throw new Error("Response not ok");

    const jumpValidationClients = res.data.clients.filter(
      (client) => "cMJValidateNumbers" in client
    );

    return jumpValidationClients;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw error;
  }
};

export const getClientById = async (id) => {
  try {
    const res = await client.get("/api/clients");
    if (!res.data.success) throw new Error("Response not ok");
    const client = res.data.clients.find(
      (client) => client.id === id && "cMJValidateNumbers" in client
    );
    if (!client) {
      throw new Error("Client not found or does not have cMJValidateNumbers");
    }
    return client;
  } catch (error) {
    console.error("Error fetching client:", error);
    throw error;
  }
};

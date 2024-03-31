import client from "../../api/client";

const getUserClients = async (id) => {
  try {
    const response = await client.get("/api/clients");
    if (response.data.success) {
      const allClients = response.data.clients;
      const currentUserClients = allClients.filter(
        (client) => client.user[0] === id
      );

      return { success: true, currentUserClients };
    } else {
      return { success: false, message: response.data.error };
    }
  } catch (error) {
    return { success: false, error };
  }
};

export default getUserClients;

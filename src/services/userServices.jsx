import client from "../api/client";

export const getAllUsers = async () => {
  const res = await client.get("/users");
  if (!res.data.success) throw new Error("Response not ok");
  const data = await res.data.users;
  return data;
};

export const updateUser = async (id, values) => {
  try {
    const res = await client.put(`/user/${id}`, values);
    console.log("respuesta", res);

    if (!res.data.success) {
      throw new Error(res.data.message || "Error en la actualización");
    }

    return res.data;
  } catch (error) {
    console.error("Error in updateUser service:", error);
    throw error;
  }
};

export const getUserCourses = async (id) => {
  const res = await client.put(`user/${id}`);
  if (!res.data.success) throw new Error("Response not ok");
  return res.data.updatedUser.courses;
};

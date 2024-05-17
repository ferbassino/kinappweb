import client from "../api/client";

const login = async (credentials) => {
  try {
    const { email, password } = credentials;
    const { data } = await client.post("/sign-in", {
      email,
      password,
    });
    if (!data.success) {
      return { success: false, message: data.message };
    } else {
      if (!data.user.verified) {
        return { success: false, message: "unverified email" };
      }
    }
    const user = data.user;
    localStorage.setItem("user", JSON.stringify(user));
    return { success: true, user };
  } catch (error) {
    if (error?.response?.data) {
      return error.response.data;
    }
  }
};

export default login;

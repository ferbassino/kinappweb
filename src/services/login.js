import client from "../api/client";

const login = async (credentials) => {
  try {
    const { email, password } = credentials;
    const { data } = await client.post("/sign-in", {
      email,
      password,
    });

    if (data.success) {
      const { user } = data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("session_date", Date.now());
    }

    return data.user;
  } catch (error) {
    if (error?.response?.data) {
      return error.response.data;
    }
    console.log(`signIn method error: ${error}`);
    return { success: false, error: error.message };
  }
};

export default login;

// const login = async (credentials) => {
//
//   try {
//     const { email, password } = credentials;

//     const { data } = await client.post("/sign-in", {
//       email,
//       password,
//     });

//     if (data.success) {
//       return data.user;
//     } else {
//       const res = await client.post("/api/client", {
//         email,
//         password,
//       });

//       if (res.data.success) {
//         const obj = res.data.client;
//         return obj;
//       } else {
//         return data.messagge;
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   //
// };

// export default login;

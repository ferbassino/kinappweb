const logout = () => {
  try {
    localStorage.removeItem("user");
    localStorage.removeItem("session_date");
  } catch (error) {
    console.log(error);
  }
};

export default logout;

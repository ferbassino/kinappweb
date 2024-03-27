import client from "../../api/client";

export const getTests = async (id) => {
  let userTests = [];
  const response = await client.get("/api/motion/motionTests");
  const allTests = response.data.motionTests;
  allTests.map((el) => {
    if (el.userId[0] === id) {
      userTests.push(el);
    }
  });

  return userTests;
};

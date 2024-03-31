import client from "../../api/client";

export const getTest = async (testId) => {
  const response = await client.get(`/api/motion/motionTests/${testId}`);
  const test = response.data.motionTest;

  return test;
};

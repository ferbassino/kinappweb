import client from "../api/client";

export const getAllTests = async () => {
  const res = await client.get("/api/motion/motionTests");
  if (!res.data.success) throw new Error("Response not ok");
  const data = await res.data.motionTests;

  return data;
};

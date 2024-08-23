import client from "../api/client";

export const getAllTests = async () => {
  const res = await client.get("/api/motion/motionTests");
  if (!res.data.success) throw new Error("Response not ok");
  const data = await res.data.motionTests;

  return data;
};

export const getTestsByIds = async (ids) => {
  try {
    const res = await client.get("/api/motion/motionTests");

    if (!res.data.success) throw new Error("Response not ok");

    const filteredTests = res.data.motionTests.filter((test) =>
      ids.includes(test._id)
    );

    return filteredTests;
  } catch (error) {
    console.error("Error fetching tests:", error);
    throw error;
  }
};

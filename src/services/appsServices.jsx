import client from "../api/client";

export const getAllApps = async () => {
  const res = await client.get("/api/imudata");
  if (!res.data.success) throw new Error("Response not ok");
  const data = await res.data.imuDatas;
  return data;
};
export const getApp = async (id) => {
  const res = await client.get(`/api/imudata/${id}`);
  if (!res.data.success) throw new Error("Response not ok");
  const data = await res.data.imuData;
  return data;
};

export const updateApp = async (id, values) => {
  const res = await client.put(`api/imudata/${id}`, values, {
    new: true,
  });

  if (!res.data.updatedImudata) throw new Error("Response not ok");
  return res.data.updatedImudata;
};

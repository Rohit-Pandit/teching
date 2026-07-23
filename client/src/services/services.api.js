import api from "./api";

export const getServices = async () => {
  const response = await api.get("/services");

  return response.data.data;
};

export const getServiceById = async (id) => {
  const response = await api.get(`/services/${id}`);

  return response.data.data;
};
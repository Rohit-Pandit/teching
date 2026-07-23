import api from "./api";

export const getPartners = async () => {
  const response = await api.get("/partners");
  
  return response.data.data;
  
  
};
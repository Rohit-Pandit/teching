import Partner from "../models/Partner.model.js";

export const createPartner = async (payload) => {
  return await Partner.create(payload);
};

export const getAllPartners = async () => {
  return await Partner.find({ active: true }).sort({
    order: 1,
  });
};

export const getPartnerById = async (id) => {
  return await Partner.findById(id);
};

export const updatePartner = async (id, payload) => {
  return await Partner.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

export const deletePartner = async (id) => {
  return await Partner.findByIdAndDelete(id);
};
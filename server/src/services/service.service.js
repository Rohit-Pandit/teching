import Service from "../models/Service.model.js";

export const createService = async (payload) => {
  return await Service.create(payload);
};

export const getAllServices = async () => {
  return await Service.find({ active: true }).sort({ order: 1 });
};

export const getServiceById = async (id) => {
  return await Service.findById(id);
};

export const getServiceBySlug = async (slug) => {
  return await Service.findOne({ slug });
};

export const updateService = async (id, payload) => {
  return await Service.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

export const deleteService = async (id) => {
  return await Service.findByIdAndDelete(id);
};
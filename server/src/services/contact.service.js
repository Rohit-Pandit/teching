import Contact from "../models/Contact.model.js";

export const createContact = async (payload) => {
  return await Contact.create(payload);
};

export const getAllContacts = async () => {
  return await Contact.find().sort({ createdAt: -1 });
};

export const getContactById = async (id) => {
  return await Contact.findById(id);
};

export const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};
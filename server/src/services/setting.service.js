import Setting from "../models/Setting.model.js";

export const getSettings = async () => {
  return await Setting.findOne();
};

export const updateSettings = async (payload) => {
  const existing = await Setting.findOne();

  if (!existing) {
    return await Setting.create(payload);
  }

  Object.assign(existing, payload);

  return await existing.save();
};
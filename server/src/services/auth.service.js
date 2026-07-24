import bcrypt from "bcryptjs";

import Admin from "../models/Admin.model.js";

const loginAdmin = async (email, password) => {
  const admin = await Admin.findOne({
    email,
  }).select("+password");

  if (!admin) {
    throw new Error("Invalid email or password");
  }

  if (!admin.isActive) {
    throw new Error("Admin account is inactive");
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  return admin;
};

export { loginAdmin };
import bcrypt from "bcryptjs";

import connectDB from "../database/seed.js";

import Admin from "../models/admin.model.js";

import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../config/env.js";

const createAdmin = async () => {
  try {
    await connectDB();

    const email = ADMIN_EMAIL;

    const existingAdmin = await Admin.findOne({
      email,
    });

    if (existingAdmin) {
      console.log("Admin already exists");

      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 12);

    await Admin.create({
      name: "Techning Admin",
      email,
      password: hashedPassword,
      role: "superadmin",
    });

    console.log("Admin created successfully");

    process.exit(0);
  } catch (error) {
    console.error("Failed to create admin:", error);

    process.exit(1);
  }
};

createAdmin();

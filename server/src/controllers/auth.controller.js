import asyncHandler from "../utils/asyncHandler.js";

import AuthService from "../services/auth.service.js";

import { generateAccessToken } from "../utils/jwt.js";

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const admin = await AuthService.loginAdmin(email, password);

  const token = generateAccessToken(admin);

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    success: true,
    message: "Login successful",
    data: {
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    },
  });
});


export default {
  login,
};
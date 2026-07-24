import asyncHandler from "../utils/asyncHandler.js";

import {loginAdmin} from "../services/auth.service.js";

import { generateAccessToken } from "../utils/jwt.js";

import Admin from "../models/Admin.model.js";

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const admin = await loginAdmin(email, password);

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

const getMe = asyncHandler(
async (req, res) => {
    const admin =
      await Admin.findById(
        req.admin.id
      ).select(
        "-password"
      );

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Admin fetched successfully",
      data: {
        admin,
      },
    });
  }
);

const logout = asyncHandler(
  async (req, res) => {
    res.clearCookie(
      "accessToken",
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite:
          process.env.NODE_ENV ===
          "production"
            ? "none"
            : "lax",
      }
    );

    return res.status(200).json({
      success: true,
      message:
        "Logout successful",
    });
  }
);


export {
  login,
  getMe,
  logout
};

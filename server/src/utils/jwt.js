import jwt from "jsonwebtoken";

export const generateAccessToken = (admin) => {
  return jwt.sign(
    {
      id: admin._id.toString(),
      role: admin.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
};

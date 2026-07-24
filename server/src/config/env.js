import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI;
export const CLIENT_URL = process.env.CLIENT_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;


if (!MONGO_URI) {
  console.error("MONGO_URI is not defined in the environment variables.");
  process.exit(1);
}

if(!CLIENT_URL) {
  console.error("CLIENT_URL is not defined in the environment variables.");
  process.exit(1);
}

if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined in the environment variables.");
  process.exit(1);
}

if (!ADMIN_EMAIL) {
  console.error("ADMIN_EMAIL is not defined in the environment variables.");
  process.exit(1);
}

if (!ADMIN_PASSWORD) {
  console.error("ADMIN_PASSWORD is not defined in the environment variables.");
  process.exit(1);
}


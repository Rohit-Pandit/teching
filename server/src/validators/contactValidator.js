import { body } from "express-validator";

export const createContactValidator = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required"),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required"),

  body("phone")
    .optional()
    .trim(),

  body("company")
    .optional()
    .trim(),

  body("service")
    .optional()
    .trim(),

  body("subject")
    .optional()
    .trim(),
];
import { body } from "express-validator";

export const createPartnerValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Partner name is required"),

  body("website")
    .optional()
    .trim()
    .isURL()
    .withMessage("Website must be a valid URL"),
];
import { body } from "express-validator";

export const updateSettingValidator = [
  body("companyName")
    .optional()
    .trim(),

  body("tagline")
    .optional()
    .trim(),

  body("address")
    .optional()
    .trim(),
];
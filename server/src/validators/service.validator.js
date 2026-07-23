import { body } from "express-validator";

export const createServiceValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),

  body("slug")
    .trim()
    .notEmpty()
    .withMessage("Slug is required"),

  body("shortDescription")
    .trim()
    .notEmpty()
    .withMessage("Short description is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),
];
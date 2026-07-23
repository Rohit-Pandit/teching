import { body } from "express-validator";

export const createTestimonialValidator = [
  body("clientName")
    .trim()
    .notEmpty()
    .withMessage("Client name is required"),

  body("review")
    .trim()
    .notEmpty()
    .withMessage("Review is required"),

  body("rating")
    .optional()
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),
];
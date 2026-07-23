import express from "express";

import * as TestimonialController from "../controllers/testimonial.controller.js";

import validate from "../middleware/validate.middleware.js";

import {
  createTestimonialValidator,
} from "../validators/testimonial.validator.js";

const router = express.Router();

router.get("/", TestimonialController.getTestimonials);

router.get("/:id", TestimonialController.getTestimonial);

router.post(
  "/",
  createTestimonialValidator,
  validate,
  TestimonialController.createTestimonial
);

router.patch("/:id", TestimonialController.updateTestimonial);

router.delete("/:id", TestimonialController.deleteTestimonial);

export default router;
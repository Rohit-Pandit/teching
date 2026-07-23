import asyncHandler from "../utils/asyncHandler.js";
import * as TestimonialService from "../services/testimonial.service.js";
import { successResponse } from "../utils/apiResponse.js";

export const createTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await TestimonialService.createTestimonial(req.body);

  return successResponse(
    res,
    testimonial,
    "Testimonial created successfully",
    201
  );
});

export const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await TestimonialService.getAllTestimonials();

  return successResponse(res, testimonials);
});

export const getTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await TestimonialService.getTestimonialById(req.params.id);

  return successResponse(res, testimonial);
});

export const updateTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await TestimonialService.updateTestimonial(
    req.params.id,
    req.body
  );

  return successResponse(
    res,
    testimonial,
    "Testimonial updated successfully"
  );
});

export const deleteTestimonial = asyncHandler(async (req, res) => {
  await TestimonialService.deleteTestimonial(req.params.id);

  return successResponse(
    res,
    null,
    "Testimonial deleted successfully"
  );
});
import Testimonial from "../models/Testimonial.model.js";

export const createTestimonial = async (payload) => {
  return await Testimonial.create(payload);
};

export const getAllTestimonials = async () => {
  return await Testimonial.find({ active: true }).sort({
    order: 1,
  });
};

export const getTestimonialById = async (id) => {
  return await Testimonial.findById(id);
};

export const updateTestimonial = async (id, payload) => {
  return await Testimonial.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

export const deleteTestimonial = async (id) => {
  return await Testimonial.findByIdAndDelete(id);
};
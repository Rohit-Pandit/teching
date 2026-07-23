import asyncHandler from "../utils/asyncHandler.js";

import * as ContactService from "../services/contact.service.js";

import { successResponse } from "../utils/apiResponse.js";

export const createContact = asyncHandler(async (req, res) => {
  const payload = {
    ...req.body,
    ipAddress: req.ip,
  };

  const contact = await ContactService.createContact(payload);

  return successResponse(res, contact, "Enquiry submitted successfully", 201);
});

export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await ContactService.getAllContacts();

  return successResponse(res, contacts);
});

export const getContact = asyncHandler(async (req, res) => {
  const contact = await ContactService.getContactById(req.params.id);

  return successResponse(res, contact);
});

export const deleteContact = asyncHandler(async (req, res) => {
  await ContactService.deleteContact(req.params.id);

  return successResponse(res, null, "Contact deleted");
});

import asyncHandler from "../utils/asyncHandler.js";
import * as PartnerService from "../services/partner.service.js";
import { successResponse } from "../utils/apiResponse.js";

export const createPartner = asyncHandler(async (req, res) => {
  const partner = await PartnerService.createPartner(req.body);

  return successResponse(
    res,
    partner,
    "Partner created successfully",
    201
  );
});

export const getPartners = asyncHandler(async (req, res) => {
  const partners = await PartnerService.getAllPartners();

  return successResponse(res, partners);
});

export const getPartner = asyncHandler(async (req, res) => {
  const partner = await PartnerService.getPartnerById(req.params.id);

  return successResponse(res, partner);
});

export const updatePartner = asyncHandler(async (req, res) => {
  const partner = await PartnerService.updatePartner(
    req.params.id,
    req.body
  );

  return successResponse(
    res,
    partner,
    "Partner updated successfully"
  );
});

export const deletePartner = asyncHandler(async (req, res) => {
  await PartnerService.deletePartner(req.params.id);

  return successResponse(
    res,
    null,
    "Partner deleted successfully"
  );
});
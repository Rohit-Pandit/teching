import asyncHandler from "../utils/asyncHandler.js";
import * as ServiceService from "../services/service.service.js";
import { successResponse } from "../utils/apiResponse.js";

export const createService = asyncHandler(async (req, res) => {
  const service = await ServiceService.createService(req.body);

  return successResponse(
    res,
    service,
    "Service created successfully",
    201
  );
});

export const getServices = asyncHandler(async (req, res) => {
  const services = await ServiceService.getAllServices();

  return successResponse(res, services);
});

export const getService = asyncHandler(async (req, res) => {
  const service = await ServiceService.getServiceById(req.params.id);

  return successResponse(res, service);
});

export const updateService = asyncHandler(async (req, res) => {
  const service = await ServiceService.updateService(
    req.params.id,
    req.body
  );

  return successResponse(
    res,
    service,
    "Service updated successfully"
  );
});

export const deleteService = asyncHandler(async (req, res) => {
  await ServiceService.deleteService(req.params.id);

  return successResponse(
    res,
    null,
    "Service deleted successfully"
  );
});
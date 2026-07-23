import asyncHandler from "../utils/asyncHandler.js";
import * as SettingService from "../services/setting.service.js";
import { successResponse } from "../utils/apiResponse.js";

export const getSettings = asyncHandler(async (req, res) => {
  const settings = await SettingService.getSettings();

  return successResponse(res, settings);
});

export const updateSettings = asyncHandler(async (req, res) => {
  const settings = await SettingService.updateSettings(req.body);

  return successResponse(
    res,
    settings,
    "Settings updated successfully"
  );
});
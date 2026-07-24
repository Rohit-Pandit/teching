import express from "express";

import * as SettingController from "../controllers/setting.controller.js";

import validate from "../middleware/validate.middleware.js";

import { updateSettingValidator } from "../validators/setting.validator.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", SettingController.getSettings);

router.patch(
  "/",
  authMiddleware,

  updateSettingValidator,
  validate,
  SettingController.updateSettings,
);

export default router;

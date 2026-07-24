import express from "express";

import * as ServiceController from "../controllers/service.controller.js";

import validate from "../middleware/validate.middleware.js";

import { createServiceValidator } from "../validators/service.validator.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", ServiceController.getServices);

router.get("/:id", ServiceController.getService);

router.post(
  "/",
  authMiddleware,
  createServiceValidator,
  validate,
  ServiceController.createService,
);

router.patch("/:id", authMiddleware, ServiceController.updateService);

router.delete("/:id", authMiddleware, ServiceController.deleteService);

export default router;

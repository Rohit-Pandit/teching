import express from "express";

import * as ServiceController from "../controllers/service.controller.js";

import validate from "../middleware/validate.middleware.js";

import { createServiceValidator } from "../validators/service.validator.js";

const router = express.Router();

router.get("/", ServiceController.getServices);

router.get("/:id", ServiceController.getService);

router.post(
  "/",
  createServiceValidator,
  validate,
  ServiceController.createService
);

router.patch("/:id", ServiceController.updateService);

router.delete("/:id", ServiceController.deleteService);

export default router;
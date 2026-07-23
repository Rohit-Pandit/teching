import express from "express";

import * as PartnerController from "../controllers/partner.controller.js";

import validate from "../middleware/validate.middleware.js";

import {
  createPartnerValidator,
} from "../validators/partner.validator.js";

const router = express.Router();

router.get("/", PartnerController.getPartners);

router.get("/:id", PartnerController.getPartner);

router.post(
  "/",
  createPartnerValidator,
  validate,
  PartnerController.createPartner
);

router.patch("/:id", PartnerController.updatePartner);

router.delete("/:id", PartnerController.deletePartner);

export default router;
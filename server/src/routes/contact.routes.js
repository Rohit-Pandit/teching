import express from "express";

import * as ContactController from "../controllers/contact.controller.js";

import validate from "../middleware/validate.middleware.js";

import { createContactValidator } from "../validators/contactValidator.js";

const router = express.Router();

router.post(
  "/",
  createContactValidator,
  validate,
  ContactController.createContact,
);

router.get("/", ContactController.getContacts);

router.get("/:id", ContactController.getContact);

router.delete("/:id", ContactController.deleteContact);

export default router;

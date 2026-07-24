import express from "express";
import contactRoutes from "./contact.routes.js";
import serviceRoutes from "./service.routes.js";
import settingRoutes from "./setting.routes.js";
import partnerRoutes from "./partner.routes.js";
import testimonialRoutes from "./testimonial.routes.js";

import authRoutes from "./auth.routes.js";

const router = express.Router();

router.use("/contacts", contactRoutes);
router.use("/services", serviceRoutes);
router.use("/settings", settingRoutes);
router.use("/partners", partnerRoutes);
router.use("/testimonials", testimonialRoutes);

router.use("/auth", authRoutes);

export default router;
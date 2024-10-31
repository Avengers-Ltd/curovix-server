import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ServiceValidation } from "./service.validation";
import { ServiceController } from "./service.controller";
const router = express.Router();

router.post(
  "/",
  validateRequest(ServiceValidation.createServiceSchema),
  ServiceController.createService,
);

router.get("/", ServiceController.getAllServices);

router.get("/:id", ServiceController.getSingleService);

router.put(
  "/:id",
  validateRequest(ServiceValidation.updateServiceSchema),
  ServiceController.updateService,
);

router.delete("/:id", ServiceController.deleteService);

export const ServiceRoutes = router;

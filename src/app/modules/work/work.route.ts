import express from "express";
import { WorkController } from "./work.controller";
import validateRequest from "../../middlewares/validateRequest";
import { WorkValidation } from "./work.validation";
const router = express.Router();

router.post(
  "/create",
  validateRequest(WorkValidation.createWorkSchema),
  WorkController.createWork
);

router.get("/get-all", WorkController.getAllWorks);

router.get("/get/:id", WorkController.getSingleWork);

router.put(
  "/update/:id",
  validateRequest(WorkValidation.updateWorkSchema),
  WorkController.updateWork
);

router.delete("/delete/:id", WorkController.deleteWork);

export const WorkRoutes = router;

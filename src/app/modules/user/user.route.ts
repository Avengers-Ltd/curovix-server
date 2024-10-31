import { Router } from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";

const router = Router();

router.post(
  "/create-user",
  validateRequest(userValidation.createUserSchema),
  UserControllers.createUser,
);
router.get("/", UserControllers.getAllUser);
router.get("/:id", UserControllers.getUser);

export const UserRoutes = router;

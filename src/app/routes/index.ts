import express from "express";
import { WorkRoutes } from "../modules/work/work.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/work",
    route: WorkRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;

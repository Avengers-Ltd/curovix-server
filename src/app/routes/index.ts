import express from "express";
import { WorkRoutes } from "../modules/work/work.route";
import { ServiceRoutes } from "../modules/service/service.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/work",
    route: WorkRoutes,
  },
  {
    path: "/service",
    route: ServiceRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;

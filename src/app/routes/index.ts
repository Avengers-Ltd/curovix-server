import express from 'express'
import { WorkRoutes } from '../modules/work/work.route'
import { ServiceRoutes } from '../modules/service/service.route'
import { UserRoutes } from '../modules/user/user.route'
import { AuthRoutes } from '../modules/auth/auth.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/work',
    route: WorkRoutes
  },
  {
    path: '/service',
    route: ServiceRoutes
  },
  {
    path: '/user',
    route: UserRoutes
  },
  {
    path: '/auth',
    route: AuthRoutes
  }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router

import { Router } from "express";
import {
  createNewPropertiesController,
  listAllPropertiesController,
} from "../controllers/properties.controllers";
import adminPrivateRouteCheckMiddlewar from "../middlewares/adminPrivateRouteCheck.middlewares";
import validityCheckOfUserByTokenMiddlewares from "../middlewares/validityCheckOfUserByToken.middlewares";

const propertiesRoutes = Router();
propertiesRoutes.post(
  "",
  validityCheckOfUserByTokenMiddlewares,
  adminPrivateRouteCheckMiddlewar,
  createNewPropertiesController
);
propertiesRoutes.get("", listAllPropertiesController);

export default propertiesRoutes;

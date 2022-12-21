import { Router } from "express";
import {
  createNewPropertiesController,
  listAllPropertiesController,
} from "../controllers/properties.controllers";

const propertiesRoutes = Router();
propertiesRoutes.post("", createNewPropertiesController);
propertiesRoutes.get("", listAllPropertiesController);

export default propertiesRoutes;

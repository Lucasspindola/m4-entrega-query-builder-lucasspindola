import { Router } from "express";
import {
  createNewCategoryController,
  listCategoriesController,
  listOfAllPropertiesOfACategoryController,
} from "../controllers/categories.controllers";
import adminPrivateRouteCheckMiddlewar from "../middlewares/adminPrivateRouteCheck.middlewares";

import invaliIdCategoryMiddlewares from "../middlewares/invalidIDCategories.middlewares";
import validityCheckOfUserByTokenMiddlewares from "../middlewares/validityCheckOfUserByToken.middlewares";

const categoriesRoutes = Router();
categoriesRoutes.post(
  "",
  validityCheckOfUserByTokenMiddlewares,
  adminPrivateRouteCheckMiddlewar,
  createNewCategoryController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get(
  "/:id/properties",
  invaliIdCategoryMiddlewares,
  listOfAllPropertiesOfACategoryController
);

export default categoriesRoutes;

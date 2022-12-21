import { Router } from "express";
import {
  createNewCategoryController,
  listCategoriesController,
  listOfAllPropertiesOfACategoryController,
} from "../controllers/categories.controllers";

const categoriesRoutes = Router();
categoriesRoutes.post("", createNewCategoryController);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get(
  "/:id/properties",
  listOfAllPropertiesOfACategoryController
);

export default categoriesRoutes;

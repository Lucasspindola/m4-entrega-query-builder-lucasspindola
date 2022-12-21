import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import createNewCategoryService from "../services/CategorieServices/createNewCategory.services";
import listCategoriesService from "../services/CategorieServices/listCategories.services";
import listOfAllPropertiesOfACategoryService from "../services/CategorieServices/listOfAllPropertiesOfACategory.services";

const createNewCategoryController = async (req: Request, res: Response) => {
  const dataCategory: ICategoryRequest = req.body;
  const dataCategoryResponse = await createNewCategoryService(dataCategory);
  return res.status(201).json(dataCategoryResponse);
};

const listCategoriesController = async (req: Request, res: Response) => {
  const categoriesAll = await listCategoriesService();
  res.json(categoriesAll);
};
const listOfAllPropertiesOfACategoryController = async (
  req: Request,
  res: Response
) => {
  const allProperties = await listOfAllPropertiesOfACategoryService();
  res.json(allProperties);
};
export {
  createNewCategoryController,
  listCategoriesController,
  listOfAllPropertiesOfACategoryController,
};

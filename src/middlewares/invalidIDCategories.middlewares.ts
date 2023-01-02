import { Request, Response, NextFunction } from "express";

import AppDataSource from "../data-source";
import { Category } from "../entities/categories.entity";
const invaliIdCategoryMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let idCategory = req.params.id;
  if (!idCategory) {
    return res.status(404).json({ message: "Invalid id" });
  }
  const repositoryCategory = AppDataSource.getRepository(Category);
  const findCategoryId = await repositoryCategory.findOneBy({
    id: idCategory,
  });

  if (!findCategoryId) {
    return res.status(404).json({ message: "Invalid id" });
  }

  return next();
};
export default invaliIdCategoryMiddlewares;

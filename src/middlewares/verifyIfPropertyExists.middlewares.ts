import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Property } from "../entities/properties.entity";
import { AppError } from "../errors/AppError";

const verifyIfPropertyExistsMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repositoryProperties = AppDataSource.getRepository(Property);

  const existsProperty = await repositoryProperties.findOneBy({
    id: req.body.propertieId,
  });

  if (!existsProperty) {
    throw new AppError(409, "Property not exists");
  }
  //   throw new AppError(409, "Property not exists");
  next();
};
export default verifyIfPropertyExistsMiddlewares;

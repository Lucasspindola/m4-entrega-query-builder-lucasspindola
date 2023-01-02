import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
const verifyUserExistsMiddlewar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repositoryUser = AppDataSource.getRepository(User);
  const findUser = await repositoryUser.findOne({
    where: { id: req.params.id },
    withDeleted: true,
  });

  if (!findUser) {
    throw new AppError(409, "user not exists");
  }
  next();
};

export default verifyUserExistsMiddlewar;

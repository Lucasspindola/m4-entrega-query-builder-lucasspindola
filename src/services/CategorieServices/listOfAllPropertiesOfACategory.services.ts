import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";
const listOfAllPropertiesOfACategoryService = async (
  id: string
): Promise<any> => {
  const repositoryCategory = AppDataSource.getRepository(Category);

  const propertiess = await repositoryCategory.findOne({
    relations: { properties: true },
    where: { id },
  });
  if (!propertiess) {
    throw new AppError(400, "fdf");
  }

  return propertiess;
};
export default listOfAllPropertiesOfACategoryService;

import { ICategoryRequest } from "../../interfaces/categories";
import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";

const createNewCategoryService = async (dataCategory: ICategoryRequest) => {
  const repositoryCategory = AppDataSource.getRepository(Category);
  const findCategory = await repositoryCategory.findOneBy({
    name: dataCategory.name,
  });
  if (findCategory) {
    throw new AppError(401, "User already exists");
  }
  const category = repositoryCategory.create(dataCategory);
  await repositoryCategory.save(category);

  return "category created successfully";
};

export default createNewCategoryService;

import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
const listCategoriesService = async (): Promise<Category[]> => {
  const repositoryCategory = AppDataSource.getRepository(Category);
  const categories = await repositoryCategory.find();

  return categories;
};
export default listCategoriesService;

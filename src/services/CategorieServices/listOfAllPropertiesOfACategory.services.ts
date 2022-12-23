import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { Property } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";
const listOfAllPropertiesOfACategoryService = async (
  idCategory: string
): Promise<any> => {
  // const repositoryCategory = AppDataSource.getRepository(Category);
  // const repositoryProperties = AppDataSource.getRepository(Property);
  // console.log(repositoryCategory);
  // const propertiess = await repositoryCategory.findOne({
  //   where: { id: idCategory },
  //   relations: { property: true },
  // });
  // if (!propertiess) {
  //   throw new AppError(400, "fdf");
  // }
  // console.log(propertiess);
  // // const properties = await repositoryProperties.findOneBy({});
  // return propertiess;
};
export default listOfAllPropertiesOfACategoryService;
// Não esta fazendo a busca corretamente

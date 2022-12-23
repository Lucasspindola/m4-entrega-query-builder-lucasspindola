import AppDataSource from "../../data-source";
import { Address } from "../../entities/addresses.entity";
import { Category } from "../../entities/categories.entity";
import { Property } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";

const createNewPropertiesService = async (dataProperties: IPropertyRequest) => {
  if (dataProperties.address.zipCode.length > 8) {
    throw new AppError(400, "number of characters exceeded");
  }
  if (dataProperties.address.state.length > 2) {
    throw new AppError(400, "number of characters exceeded");
  }
  const repositoryProperties = AppDataSource.getRepository(Property);
  const repositoryAddres = AppDataSource.getRepository(Address);
  const repositoryCategory = AppDataSource.getRepository(Category);
  const categoryRequest = await repositoryCategory.findOneBy({
    id: dataProperties.categoryId,
  });
  if (!categoryRequest) {
    throw new AppError(404, "Category Not Found");
  }

  const findProperties = await repositoryAddres.findOneBy({
    zipCode: dataProperties.address.zipCode,
  });

  if (findProperties) {
    throw new AppError(409, "There is already a property with this address");
  }
  const dataAddress = repositoryAddres.create(dataProperties.address);
  const saveAddress = await repositoryAddres.save(dataAddress);

  const propertie = repositoryProperties.create({
    value: dataProperties.value,
    size: dataProperties.size,
    address: saveAddress,
    category: dataProperties.categoryId,
  });

  await repositoryProperties.save(propertie);

  return propertie;
};

export default createNewPropertiesService;

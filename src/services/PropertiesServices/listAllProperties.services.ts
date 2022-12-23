import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
const listAllPropertiesService = async (): Promise<Property[]> => {
  const repositoryProperties = AppDataSource.getRepository(Property);
  const properties = repositoryProperties.find();

  return properties;
};
export default listAllPropertiesService;

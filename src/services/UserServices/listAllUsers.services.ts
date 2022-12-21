import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IuserRequestList } from "../../interfaces/users";
import { userVetorSerializer } from "../../serializers/user.serializer";
const listAllUsersService = async (): Promise<IuserRequestList[]> => {
  const repositoryUsers = AppDataSource.getRepository(User);

  const users = await repositoryUsers.find({
    withDeleted: true,
  });

  const userWithoutPasswordField = await userVetorSerializer.validate(users, {
    stripUnknown: true,
  });
  return userWithoutPasswordField;
};

export default listAllUsersService;

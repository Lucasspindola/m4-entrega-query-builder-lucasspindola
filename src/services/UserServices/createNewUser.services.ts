import {
  IUserRequest,
  IUserRequestReturnedClient,
} from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { userWithoutPasswordFieldSerializer } from "../../serializers/user.serializer";
import { AppError } from "../../errors/AppError";
const createNewUserService = async (
  dataUser: IUserRequest
): Promise<IUserRequestReturnedClient> => {
  const repositoryUser = AppDataSource.getRepository(User);
  const findUser = await repositoryUser.findOne({
    where: { email: dataUser.email },
    withDeleted: true,
  });

  if (findUser) {
    throw new AppError(409, "user exists");
  }

  const user = repositoryUser.create(dataUser);
  await repositoryUser.save(user);

  const userWithoutPasswordField =
    await userWithoutPasswordFieldSerializer.validate(user, {
      stripUnknown: true,
    });
  return userWithoutPasswordField;
};

export default createNewUserService;

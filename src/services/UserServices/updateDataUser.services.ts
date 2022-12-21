import AppDataSource from "../../data-source";
import { IUpdateUserRequest } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import { userWithoutPasswordFieldSerializer } from "../../serializers/user.serializer";
import { AppError } from "../../errors/AppError";

const updateDataUserService = async (
  dataUserUpdate: IUpdateUserRequest,
  idUser: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const keysUser = Object.keys(dataUserUpdate);

  if (keysUser.includes("isActive")) {
    throw new AppError(401, "not");
  }
  if (keysUser.includes("isAdm")) {
    throw new AppError(401, "not");
  }
  if (keysUser.includes("id")) {
    throw new AppError(401, "not");
  }

  const userCurrentData = await userRepository.findOne({
    where: { id: idUser },
    withDeleted: true,
  });

  const UserUpdate = userRepository.create({
    ...userCurrentData,
    ...dataUserUpdate,
  });

  await userRepository.save(UserUpdate);

  const userDataWithoutPassword =
    await userWithoutPasswordFieldSerializer.validate(UserUpdate, {
      stripUnknown: true,
    });

  return userDataWithoutPassword;
};

export default updateDataUserService;

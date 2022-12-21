import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

import { IUserRequestReturnedClient } from "../../interfaces/users";
const deleteUserService = async (
  idRemove: string
): Promise<IUserRequestReturnedClient> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { id: idRemove },
    withDeleted: true,
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }
  if (!user.isActive) {
    throw new AppError(400, "User not found");
  }

  await userRepository.softRemove(user);
  const userNotActive = await userRepository.save({ ...user, isActive: false });
  return {};
};

export default deleteUserService;

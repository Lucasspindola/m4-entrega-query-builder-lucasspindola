import { IPropertyRequest } from "../../interfaces/properties";

const createNewPropertiesService = async (dataProperties: IPropertyRequest) => {
  // const repositoryUser = AppDataSource.getRepository(User);
  // const findUser = await repositoryUser.findOne({
  //   where: { email: dataUser.email },
  //   withDeleted: true,
  // });
  // if (findUser) {
  //   throw new AppError(400, "user exists");
  // }
  // const user = repositoryUser.create(dataUser);
  // await repositoryUser.save(user);
  // const userWithoutPasswordField =
  //   await userWithoutPasswordFieldSerializer.validate(user, {
  //     stripUnknown: true,
  //   });
  // return userWithoutPasswordField;
};

export default createNewPropertiesService;

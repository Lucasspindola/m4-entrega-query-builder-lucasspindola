import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { SchedulesUsersProperties } from "../../entities/schedules_users_properties.entity";
import { Property } from "../../entities/properties.entity";
const scheduleAVisitToThePropertyService = async (dataScheduleaVisit) => {
  const repositoryUser = AppDataSource.getRepository(User);
  const repositorySchedule = AppDataSource.getRepository(
    SchedulesUsersProperties
  );
  const repositoryProperties = AppDataSource.getRepository(Property);
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

export default scheduleAVisitToThePropertyService;

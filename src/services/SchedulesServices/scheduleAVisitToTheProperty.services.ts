import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { SchedulesUsersProperties } from "../../entities/schedules_users_properties.entity";
import { Property } from "../../entities/properties.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import { AppError } from "../../errors/AppError";
import { ParameterDescriptionMessage } from "pg-protocol/dist/messages";

const scheduleAVisitToThePropertyService = async (
  dataScheduleaVisit: IScheduleRequest,
  userId: string
): Promise<object> => {
  // if(dataScheduleaVisit.date){

  // }
  const freeTimeHour = dataScheduleaVisit.hour.split(":");
  const hourShedule = freeTimeHour[0];
  const minutesShedule = freeTimeHour[1];
  if (
    parseInt(hourShedule) < 8 ||
    parseInt(hourShedule) >= 18 ||
    parseInt(minutesShedule) < 0 ||
    parseInt(minutesShedule) > 59
  ) {
    throw new AppError(
      400,
      "Out of opening hours. Try to book from 08:00 to 18:00, Monday to Friday."
    );
  }

  const repositoryUser = AppDataSource.getRepository(User);
  const repositorySchedule = AppDataSource.getRepository(
    SchedulesUsersProperties
  );
  const repositoryProperties = AppDataSource.getRepository(Property);

  const user = repositoryUser.findOneBy({ id: userId });
  const propertyExists = await repositoryProperties.findOneBy({
    id: dataScheduleaVisit.propertyId,
  });
  // console.log(propertyExists, "AQUIIIII@@");
  //  Esta pegando o propertyExists, mas o if !propertyExists não para

  if (!propertyExists) {
    throw new AppError(404, "Property does not exist in our database.");
  }
  //  else {
  //   throw new AppError(404, "else.");
  // }
  const findUserSchedule = await repositoryUser
    .createQueryBuilder("users")
    .leftJoinAndSelect("users.schedules", "schedules")
    .where("users.id = :id", { id: userId })
    .andWhere("schedules.date = :date", { date: dataScheduleaVisit.date })
    .andWhere("schedules.hour = :hour", { hour: dataScheduleaVisit.hour })
    .getOne();

  if (findUserSchedule) {
    throw new AppError(0, "User schedule already exists");
  }

  const schedule = {
    ...dataScheduleaVisit,
    user: userId,
    property: dataScheduleaVisit.propertyId,
  };

  const scheduleNew = repositorySchedule.create(schedule as Partial<Property>);

  await repositorySchedule.save(scheduleNew);

  return { message: "created schedule" };
};

export default scheduleAVisitToThePropertyService;

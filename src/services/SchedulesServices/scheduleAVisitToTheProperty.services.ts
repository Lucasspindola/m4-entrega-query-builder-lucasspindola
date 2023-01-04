import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { SchedulesUsersProperties } from "../../entities/schedules_users_properties.entity";
import { Property } from "../../entities/properties.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import { AppError } from "../../errors/AppError";

const scheduleAVisitToThePropertyService = async (
  dataScheduleaVisit: IScheduleRequest,
  userId: string
): Promise<object> => {
  const { date, hour, propertyId } = dataScheduleaVisit;
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

  const formatedDate = new Date(date);

  if (formatedDate.getDay() < 1 || formatedDate.getDay() > 5) {
    throw new AppError(
      400,
      "invalid date :It is not possible to make appointments on weekends."
    );
  }

  const repositoryUser = AppDataSource.getRepository(User);
  const repositorySchedule = AppDataSource.getRepository(
    SchedulesUsersProperties
  );
  const repositoryProperties = AppDataSource.getRepository(Property);

  const user = await repositoryUser.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError(404, "User not exists.");
  }

  const propertyExists = await repositoryProperties.findOneBy({
    id: propertyId,
  });

  if (!propertyExists) {
    throw new AppError(404, "Property does not exist in our database.");
  }

  const findPropertyDate = await repositoryProperties
    .createQueryBuilder("properties")
    .leftJoinAndSelect("properties.schedules", "schedules")
    .where("properties.id = :id", { id: propertyId })
    .andWhere("schedules.hour = :hour", { hour: dataScheduleaVisit.hour })
    .andWhere("schedules.date = :date", { date: dataScheduleaVisit.date })
    .getOne();

  if (findPropertyDate) {
    throw new AppError(409, "indisponivel");
  }

  const findUserSchedule = await repositoryUser
    .createQueryBuilder("users")
    .leftJoinAndSelect("users.schedules", "schedules")
    .where("users.id = :id", { id: userId })
    .andWhere("schedules.date = :date", { date: dataScheduleaVisit.date })
    .andWhere("schedules.hour = :hour", { hour: dataScheduleaVisit.hour })
    .getOne();

  if (findUserSchedule) {
    throw new AppError(409, "User schedule already exists");
  }

  const schedule = {
    ...dataScheduleaVisit,
    user: userId,
    property: dataScheduleaVisit.propertyId,
  };

  const scheduleNew = repositorySchedule.create(schedule as Partial<Property>);

  await repositorySchedule.save(scheduleNew);

  return scheduleNew;
};

export default scheduleAVisitToThePropertyService;

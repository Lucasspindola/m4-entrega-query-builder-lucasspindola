// schedulingListOfAPropertyController

import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { SchedulesUsersProperties } from "../../entities/schedules_users_properties.entity";
import { AppError } from "../../errors/AppError";

const schedulingListOfAPropertyService = async (propertyId: string) => {
  const repositorySchedule = AppDataSource.getRepository(
    SchedulesUsersProperties
  );
  const repositoryProperties = AppDataSource.getRepository(Property);

  const existsPropertySchedule = await repositoryProperties.findOneBy({
    id: propertyId,
  });

  if (!existsPropertySchedule) {
    throw new AppError(404, "non-existent schedule");
  }

  const allSchedules = await repositoryProperties.findOne({
    relations: { schedule: true },
    where: { id: propertyId },
  });

  return allSchedules;
};

export default schedulingListOfAPropertyService;

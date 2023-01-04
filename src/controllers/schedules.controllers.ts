import { Request, Response } from "express";
import scheduleAVisitToThePropertyService from "../services/SchedulesServices/scheduleAVisitToTheProperty.services";
import schedulingListOfAPropertyService from "../services/SchedulesServices/schedulingListOfAProperty.services";

const scheduleAVisitToThePropertyController = async (
  req: Request,
  res: Response
) => {
  const dataScheduleaVisit = req.body;
  const userId = req.user.id;

  await scheduleAVisitToThePropertyService(dataScheduleaVisit, userId);

  return res.status(201).json({ message: "dsd" });
};

const schedulingListOfAPropertyController = async (
  req: Request,
  res: Response
) => {
  const propertyId = req.params.id;
  const listScheduling = await schedulingListOfAPropertyService(propertyId);
  return res.status(200).json(listScheduling);
};
export {
  scheduleAVisitToThePropertyController,
  schedulingListOfAPropertyController,
};

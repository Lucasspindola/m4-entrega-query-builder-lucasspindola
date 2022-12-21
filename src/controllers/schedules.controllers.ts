import { Request, Response } from "express";
import scheduleAVisitToThePropertyService from "../services/SchedulesServices/scheduleAVisitToTheProperty.services";
import schedulingListOfAPropertyControllerService from "../services/SchedulesServices/schedulingListOfAProperty.services";

const scheduleAVisitToThePropertyController = async (
  req: Request,
  res: Response
) => {
  const dataScheduleaVisit = req.body;
  const responseClient = await scheduleAVisitToThePropertyService(
    dataScheduleaVisit
  );
  //   return res.status(201).json(responseClient);
};

const schedulingListOfAPropertyController = async (
  req: Request,
  res: Response
) => {
  const imovel = req.params.id;
  const listScheduling = await schedulingListOfAPropertyControllerService();
  //   return res.status(201).json(responseClient);
};
export {
  scheduleAVisitToThePropertyController,
  schedulingListOfAPropertyController,
};

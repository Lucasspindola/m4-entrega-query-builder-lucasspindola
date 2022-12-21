import { Router } from "express";
import {
  scheduleAVisitToThePropertyController,
  schedulingListOfAPropertyController,
} from "../controllers/schedules.controllers";

const schedulesRoutes = Router();
schedulesRoutes.post("", scheduleAVisitToThePropertyController);
schedulesRoutes.get("/properties/:id", schedulingListOfAPropertyController);

export default schedulesRoutes;

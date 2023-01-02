import { Router } from "express";
import {
  scheduleAVisitToThePropertyController,
  schedulingListOfAPropertyController,
} from "../controllers/schedules.controllers";
import validityCheckOfUserByTokenMiddlewares from "../middlewares/validityCheckOfUserByToken.middlewares";
import verifyIfPropertyExistsMiddlewares from "../middlewares/verifyIfPropertyExists.middlewares";

const schedulesRoutes = Router();
schedulesRoutes.post(
  "",
  validityCheckOfUserByTokenMiddlewares,
  scheduleAVisitToThePropertyController
);
// schedulesRoutes.get("/properties/:id", schedulingListOfAPropertyController);

export default schedulesRoutes;

// verifyUserExistsMiddlewar; Verifica se o usuario que vai marcar agendamento existe. Conferir se esta funcionando.
// verifyIfPropertyExistsMiddlewares

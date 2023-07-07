import { Router } from "express";
import * as controller from "../../controllers/calendarController.js";

const calendarRouter = Router();

calendarRouter.get("/", controller.GetCalendar);

export default calendarRouter;

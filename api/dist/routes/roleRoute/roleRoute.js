import { Router } from "express";
import * as controller from "../../controllers/roleControllers.js";
import { validate } from "./validate.js";
const roleRoute = Router();
roleRoute.post("/", validate.create(), controller.editeRole);
roleRoute.delete("/", validate.removePermissionRole(), controller.removePermissionRole);
export default roleRoute;
//# sourceMappingURL=roleRoute.js.map
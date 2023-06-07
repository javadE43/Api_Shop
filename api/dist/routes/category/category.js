import { Router } from "express";
import * as controller from "../../controllers/categoryController.js";
const categoryRouter = Router();
categoryRouter.post('/', controller.CreateNewCategory);
categoryRouter.get('/', controller.GetByTilte);
export default categoryRouter;
//# sourceMappingURL=category.js.map
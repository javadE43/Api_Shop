import buildDevLogger from "./dev-logger.js";
import buildProdLogger from "./pro-logger.js";
import * as dotenv from "dotenv";
dotenv.config();
let logger = process.env.NODE_ENV === "development" ? buildDevLogger() : buildProdLogger();
export default logger;
//# sourceMappingURL=index.js.map
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";
import { response } from "../helper/customResponse.js";
const __filename = fileURLToPath(import.meta.url);
const __direname = dirname(__filename);
dotenv.config({ path: path.join(__direname, "..", "/.env") });
export const handleRefreshToken = async (req, res) => {
    const cookie = req.cookies;
    if (!cookie) {
        response({
            res,
            message: "The cookie is not set in the url",
            code: 401,
        });
        return;
    }
};
//# sourceMappingURL=verifyRefreshToke.js.map
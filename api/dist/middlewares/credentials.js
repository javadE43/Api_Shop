import { allowOrigine } from "../config/allowOrigine.js";
export const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (origin)
        if (allowOrigine.includes(origin)) {
            res.header("Access-Control-Allow-Credentials", "true");
        }
    next();
};
//# sourceMappingURL=credentials.js.map
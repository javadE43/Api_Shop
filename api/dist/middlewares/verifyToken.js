import jwt from "jsonwebtoken";
import { response } from "../helper/customResponse.js";
export const verifyToken = (req, res, next) => {
    const accessToken = req.headers.authorization;
    if (!accessToken?.startsWith("Bearer ")) {
        response({
            res,
            message: "There is no token",
            code: 401,
        });
        return;
    }
    const token = accessToken.split(" ")[1];
    jwt.verify(token, process.env.SECRET_ACCESSTOKEN, async (err, decoded) => {
        if (err) {
            response({
                res,
                message: "expired",
                code: 403,
            });
            return;
        }
        console.log(decoded);
        req.username = decoded.userInfo.username;
        req.role = decoded.userInfo.role;
        next();
    });
};
//# sourceMappingURL=verifyToken.js.map
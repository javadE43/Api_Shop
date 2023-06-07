import { Op } from "sequelize";
import Token from "../models/bo/Token.js";
export const GetTokenByNameAndUserId = async (userId, name) => {
    const token = await Token.findOne({ where: { [Op.and]: [{ name }, { userId }] } });
    if (!token) {
        return false;
    }
    else {
        return { name: token.name, userId: token.userId };
    }
};
//# sourceMappingURL=tokenDel.js.map
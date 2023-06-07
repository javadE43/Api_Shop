import { Op } from "sequelize";
import  Token  from "../models/bo/Token.js";

export interface DataToken {
  name: string;
  userId: number;
}

export const GetTokenByNameAndUserId = async (
  userId: number,
  name: string
): Promise<boolean | DataToken> => {
  const token = await Token.findOne({ where: { [Op.and]: [{ name }, { userId }] } });
  if (!token) {
    return false;
  } else {
    return { name: token.name, userId: token.userId };
  }
};

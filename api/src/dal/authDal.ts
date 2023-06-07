import  Role  from "../models/bo/Role.js";
import User, { UserInput } from "../models/bo/User.js";

export const Register = async (payload: UserInput): Promise<boolean> => {
  const role = await Role.findOne({ where: { name: "user" } });
  if (!role || typeof Number(role.toJSON()?.id) !== "number") {
    return false;
  } else {
    const roleId: number = role.toJSON().id as number;
    await User.create({ ...payload, roleId: roleId });
    return true;
  }
};

export const login = () => {};

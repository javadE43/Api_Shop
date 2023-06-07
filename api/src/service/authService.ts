import * as authUser from "../dal/authDal.js";
import { UserInput } from "../models/bo/User.js";

export const Register = async (payload: UserInput): Promise<boolean> => {
  const register = authUser.Register(payload);
  return register;
};

export const login = () => {};

import { TransactionInput } from "../models/bo/Transaction.js";
import { Transaction as pay } from "../models/index.js";

export const CreateTransAction = async (data:TransactionInput) => {
  const create = await pay.create(data);
  return create ? create : false;
};

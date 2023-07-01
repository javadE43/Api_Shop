import { TransactionInput } from "../models/bo/Transaction.js";
import { Transaction as pay } from "../models/index.js";
export declare const CreateTransAction: (data: TransactionInput) => Promise<false | pay>;

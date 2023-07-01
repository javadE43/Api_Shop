import { Transaction as pay } from "../models/index.js";
export const CreateTransAction = async (data) => {
    const create = await pay.create(data);
    return create ? create : false;
};
//# sourceMappingURL=transaction.js.map
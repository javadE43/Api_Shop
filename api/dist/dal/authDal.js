import Role from "../models/bo/Role.js";
import User from "../models/bo/User.js";
export const Register = async (payload) => {
    const role = await Role.findOne({ where: { name: "user" } });
    if (!role || typeof Number(role.toJSON()?.id) !== "number") {
        return false;
    }
    else {
        const roleId = role.toJSON().id;
        await User.create({ ...payload, roleId: roleId });
        return true;
    }
};
export const login = () => { };
//# sourceMappingURL=authDal.js.map
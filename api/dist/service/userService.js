import * as usersdal from "../dal/usersDal.js";
import { RemoveImage } from "../helper/removeImage.js";
import { sequelize } from "../models/sequelize.js";
export const create = async (payload) => {
    const result = await sequelize.transaction(async (t) => {
        const create = await usersdal.create(payload, t);
        if (create === false) {
            if (payload.image) {
                RemoveImage(payload.image);
            }
            throw new Error("Request Filed");
        }
        return true;
    });
    return result;
};
export const updata = async (id, payload) => {
    const result = await sequelize.transaction(async (t) => {
        const user = await usersdal.getByIdUser(id, t);
        const update = await usersdal.update(id, payload, t);
        if (update === false) {
            if (payload.image) {
                RemoveImage(payload.image);
            }
            throw new Error("Request Filed");
        }
        if (user === false) {
            if (payload.image) {
                RemoveImage(payload.image);
            }
            throw new Error("Request Filed");
        }
        if (typeof user !== "boolean") {
            if (user.image) {
                RemoveImage(user.image);
            }
        }
        return true;
    });
    return result;
};
export const getAllUsers = (page, limit, condition, role) => {
    const users = usersdal.getAllUsers(page, limit, condition, role);
    return users;
};
export const getByIdUser = (id) => {
    const users = usersdal.getByIdUser(id);
    return users;
};
export const getByUsernameAndEmail = (username, email) => {
    const users = usersdal.getByUsernameAndEmail(username, email);
    return users;
};
export const deleteById = (id) => {
    const users = usersdal.deleteById(id);
    return users;
};
export const removeMultipleUsers = (id) => {
    const removeMultipleUsers = usersdal.removeMultipleUsers(id);
    return removeMultipleUsers;
};
export const UpdateActiveUser = async (id, active) => {
    const upAcUser = usersdal.UpdateActiveUser(id, active);
    return upAcUser;
};
export const LogOutUser = async (id, refreshToken) => {
    const logOutUser = usersdal.LogOutUser(id, refreshToken);
    return logOutUser;
};
//# sourceMappingURL=userService.js.map
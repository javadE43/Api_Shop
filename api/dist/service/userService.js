import * as usersdal from "../dal/usersDal.js";
export const create = (payload) => {
    const create = usersdal.create(payload);
    return create;
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
export const updata = (id, payload) => {
    const users = usersdal.update(id, payload);
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
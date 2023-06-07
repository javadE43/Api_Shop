import * as RoleDel from "../dal/roleDal.js";
export const RemovePermissionRole = async (permission, roleId) => {
    const RemovePermissionRole = RoleDel.RemovePermissionRole(permission, roleId);
    return RemovePermissionRole;
};
export const EditeRole = async (permission, roleId) => {
    const EditeRole = RoleDel.EditeRole(permission, roleId);
    return EditeRole;
};
//# sourceMappingURL=roleService.js.map
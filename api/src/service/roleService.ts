import * as RoleDel from "../dal/roleDal.js";

export const RemovePermissionRole = async (permission: number,roleId: number): Promise<boolean> => {
  const RemovePermissionRole = RoleDel.RemovePermissionRole(permission, roleId);
  return RemovePermissionRole;
};
export const EditeRole = async (permission: number, roleId: number): Promise<boolean> => {
  const EditeRole = RoleDel.EditeRole(permission, roleId);
  return EditeRole;
};

import { Op } from "sequelize";
import Permission from "../models/bo/Premission.js";
import Role from "../models/bo/Role.js";
import RoleHasPermission from "../models/bo/Role_Has_Permission.js";
export const RemovePermissionRole = async (permission, roleId) => {
    const P = await Permission.findByPk(permission);
    const R = await Role.findByPk(roleId);
    if (!P?.toJSON()?.bits || !R?.toJSON().id) {
        return false;
    }
    const RHasP = await RoleHasPermission.destroy({
        where: { [Op.and]: [{ roleId }, { permissionId: P.id }] },
    });
    if (!!RHasP === false) {
        return false;
    }
    else {
        return true;
    }
};
export const EditeRole = async (permission, roleId) => {
    const P = await Permission.findByPk(permission);
    const R = await Role.findByPk(roleId);
    if (!P?.toJSON()?.bits || !R?.toJSON().id) {
        return false;
    }
    const RHasP = await RoleHasPermission.create({ permissionId: permission, roleId });
    if (!RHasP) {
        return false;
    }
    else {
        return true;
    }
};
//# sourceMappingURL=roleDal.js.map
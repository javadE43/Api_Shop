import { body } from "express-validator";
import { Op } from "sequelize";
import Permission from "../../models/bo/Premission.js";
import RoleHasPermission from "../../models/bo/Role_Has_Permission.js";
export const validate = new (class ValidateRole {
    create() {
        return [
            body("roleId")
                .notEmpty()
                .withMessage("invalide RoleId")
                .custom(async (roleId, { req }) => {
                const R = await RoleHasPermission.findOne({
                    where: { [Op.and]: [{ roleId }, { permissionId: req.body.permission }] },
                });
                if (R) {
                    return Promise.reject(`allready permission${roleId}`);
                }
                else {
                    return true;
                }
            })
                .toInt(),
            body("permission")
                .notEmpty()
                .withMessage("invalide RoleId")
                .custom(async (permission) => {
                const P = await Permission.findByPk(permission);
                if (!P) {
                    return Promise.reject(`there is no permission the with ${permission}`);
                }
                else {
                    return true;
                }
            })
                .toInt(),
        ];
    }
    removePermissionRole() {
        return [
            body("roleId")
                .notEmpty()
                .withMessage("invalide RoleId")
                .custom(async (roleId, { req }) => {
                const R = await RoleHasPermission.findOne({
                    where: { [Op.and]: [{ roleId }, { permissionId: req.body.permission }] },
                });
                if (!R) {
                    return Promise.reject(`there is no role the with ${roleId}`);
                }
                else {
                    return true;
                }
            })
                .toInt(),
            body("permission")
                .notEmpty()
                .withMessage("invalide RoleId")
                .custom(async (permission) => {
                const P = await Permission.findByPk(permission);
                if (!P) {
                    return Promise.reject(`there is no permission the with ${permission}`);
                }
                else {
                    return true;
                }
            })
                .toInt(),
        ];
    }
})();
//# sourceMappingURL=validate.js.map
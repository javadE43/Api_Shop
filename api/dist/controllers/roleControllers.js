import { validationResult } from "express-validator";
import { response } from "../helper/customResponse.js";
import { EditeRole, RemovePermissionRole } from "../service/roleService.js";
import messageResponse from '../util/messageResponse.json' assert { type: "json" };
export const editeRole = async (req, res) => {
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: "",
            code: 401,
            data: error.array(),
        });
        return;
    }
    const up = await EditeRole(req.body.permission, req.body.roleId);
    if (up === false) {
        response({
            res,
            message: messageResponse.editeAndRemovePermissionFromRole[401],
            code: 401,
        });
    }
    else {
        response({
            res,
            message: messageResponse.editeAndRemovePermissionFromRole[200],
            code: 200,
            data: up,
        });
    }
};
export const removePermissionRole = async (req, res) => {
    const error = validationResult(req);
    if (!!error.array().length) {
        response({
            res,
            message: messageResponse.editeAndRemovePermissionFromRole[401],
            code: 401,
            data: error.array(),
        });
        return;
    }
    const re = await RemovePermissionRole(req.body.permission, req.body.roleId);
    if (re === false) {
        response({
            res,
            message: "",
            code: 401,
        });
    }
    else {
        response({
            res,
            message: messageResponse.editeAndRemovePermissionFromRole[200],
            code: 200,
            data: re,
        });
    }
};
//# sourceMappingURL=roleControllers.js.map
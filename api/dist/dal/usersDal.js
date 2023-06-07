import { Op } from "sequelize";
import { paginationData } from "../helper/pagination.js";
import { RemoveImage } from "../helper/removeImage.js";
import { sequelize } from "../models/sequelize.js";
import Permission from "../models/bo/Premission.js";
import Products from "../models/bo/Product.js";
import Role from "../models/bo/Role.js";
import Token from "../models/bo/Token.js";
import User from "../models/bo/User.js";
export const create = async (payload) => {
    const create = await User.create(payload);
    if (!!create.toJSON()?.id === false) {
        return false;
    }
    else {
        return true;
    }
};
export const getAllUsers = async (offset, limit, condition, role) => {
    const users = await User.findAll({
        attributes: ["id", "firstname", "lastname", "mobile", "email", "username", "image", "active"],
        where: condition ? { username: { [Op.like]: `%${condition}%` } } : undefined,
        include: [
            {
                model: Role,
                attributes: ["name"],
                where: role ? { name: { [Op.like]: `%${role}%` } } : undefined,
                include: [
                    {
                        model: Permission,
                        attributes: ["bits"],
                        through: { attributes: [] },
                    },
                ],
            },
        ],
        offset,
        limit,
    });
    const count = await User.count();
    if (!!count === false) {
        return false;
    }
    else {
        const result = users.map((item) => {
            const permission = item.role.permissons
                .map((P) => P.bits)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const newRole = {
                role: item.role.name,
                permission,
            };
            return { ...item.toJSON(), role: newRole };
        });
        return paginationData(result, count, limit, offset);
    }
};
export const getByIdUser = async (id) => {
    const userpro = await User.findByPk(id, {
        attributes: ["firstname", "lastname", "mobile", "email", "username", "image", "active"],
        include: [
            {
                model: Role,
                attributes: ["name"],
                include: [
                    {
                        model: Permission,
                        attributes: [[sequelize.fn("sum", sequelize.col("bits")), "permission"]],
                        through: { attributes: [] },
                    },
                ],
            },
            {
                model: Products,
            },
        ],
    });
    console.log(userpro);
    const user = await User.findByPk(id, {
        attributes: ["firstname", "lastname", "mobile", "email", "username", "image", "active"],
        include: [
            {
                model: Role,
                attributes: ["name"],
                include: [
                    {
                        model: Permission,
                        attributes: [[sequelize.fn("sum", sequelize.col("bits")), "permission"]],
                        through: { attributes: [] },
                    },
                ],
            },
        ],
    });
    if (!user || !user.toJSON()?.username) {
        return false;
    }
    else {
        const newRole = {
            role: user.role.name,
            permission: Number(user.role.permissons[0].toJSON().permission),
        };
        return { ...user.toJSON(), role: newRole };
    }
};
export const getByUsernameAndEmail = async (username, email) => {
    const user = await User.findOne({
        where: { [Op.and]: [{ username }, { email }] },
        attributes: ["id", "firstname", "lastname", "mobile", "email", "username", "image", "active"],
        include: [
            {
                model: Role,
                attributes: ["name"],
                include: [
                    {
                        model: Permission,
                        attributes: [[sequelize.fn("sum", sequelize.col("bits")), "permission"]],
                        through: { attributes: [] },
                    },
                ],
            },
        ],
    });
    if (!user || !user.toJSON()?.username) {
        return false;
    }
    else {
        const newRole = {
            role: user.role.name,
            permission: Number(user.role.permissons[0].toJSON().permission),
        };
        return { ...user.toJSON(), role: newRole };
    }
};
export const update = async (id, payload) => {
    const update = await User.update({ ...payload }, { where: { id } });
    if (!update[0]) {
        return false;
    }
    else {
        return !!update[0];
    }
};
export const deleteById = async (id) => {
    const user = await User.findByPk(id);
    const deleteById = await User.destroy({ where: { id }, truncate: true });
    if (!!deleteById === false) {
        return false;
    }
    else {
        RemoveImage(user?.toJSON().image);
        return !!deleteById;
    }
};
export const removeMultipleUsers = async (ids) => {
    const user = await User.findAll({ where: { id: ids } });
    const deleteById = await User.destroy({ where: { id: ids }, truncate: true });
    if (!!deleteById === false) {
        return false;
    }
    else {
        const ImageUsers = user.map((img) => img.image);
        RemoveImage(ImageUsers);
        return !!deleteById;
    }
};
export const UpdateActiveUser = async (id, active) => {
    const user = await User.update({ active: active }, { where: { id } });
    if (!!user[0]) {
        return true;
    }
    else {
        return false;
    }
};
export const LogOutUser = async (id, refreshToken) => {
    await UpdateActiveUser(id, false);
    const removeToken = await Token.destroy({
        where: { [Op.and]: [{ name: refreshToken }, { userId: id }] },
    });
    if (!!removeToken) {
        return true;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=usersDal.js.map
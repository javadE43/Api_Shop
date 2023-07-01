import { Op } from "sequelize";
import { Cart, CartItems, Products, Role, User } from "../models/index.js";
import { conditionGetAllCart } from "./dataSort/helperCartDel.js";
import { paginationData } from "./dataSort/pagination.js";
export const CreateCart = async (data, t) => {
    const create = await Cart.create(data, { transaction: t });
    return create ? create.toJSON().id : 0;
};
export const GetCartByToken = async (token, t) => {
    const cart = await Cart.findOne({
        where: { token },
        include: [
            {
                model: CartItems,
                include: [
                    {
                        model: Products,
                    }
                ]
            },
            {
                model: User,
                attributes: { exclude: ["password", "createdAt", "updatedAt"] },
                include: [
                    {
                        model: Role,
                        attributes: ["name"],
                    },
                ],
            },
        ],
        transaction: t ? t : null,
    });
    return cart ? cart : false;
};
export const GetCartByUserId = async (userId) => {
    const cart = await Cart.findOne({
        where: { userId },
        include: [
            {
                model: CartItems,
                include: [
                    {
                        model: Products,
                    }
                ]
            },
            {
                model: User,
                attributes: { exclude: ["password", "createdAt", "updatedAt"] },
                include: [
                    {
                        model: Role,
                        attributes: ["name"],
                    },
                ],
            },
        ],
    });
    return cart ? cart : false;
};
export const GetAllCart = async (token, userId, cartId, offset, limit) => {
    const cart = await Cart.findAll({
        where: conditionGetAllCart(cartId, token, userId, Op),
        include: [
            {
                model: CartItems,
                include: [
                    {
                        model: Products,
                    }
                ]
            },
            {
                model: User,
                attributes: { exclude: ["password", "createdAt", "updatedAt"] },
                include: [
                    {
                        model: Role,
                        attributes: ["name"],
                    },
                ],
            },
        ],
        offset,
        limit
    });
    const count = await Cart.count();
    return cart ? paginationData(cart, count, limit, offset) : false;
};
export const DeleteCart = async (token, t) => {
    const remove = await Cart.destroy({ where: { token }, transaction: t });
    return !!remove ? true : false;
};
export const UpdateStausCart = async (token, status, t) => {
    const cart = await Cart.update({ status: status }, { where: { token }, transaction: t });
    return cart[0] ? true : false;
};
//# sourceMappingURL=cartDel.js.map
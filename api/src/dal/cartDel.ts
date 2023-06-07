import { Op, Transaction } from "sequelize";
import { CartInput, FindAttributesCart } from "../models/bo/Cart.js";
import { Cart, CartItems, Products, Role, User } from "../models/index.js";
import { conditionGetAllCart } from "./dataSort/helperCartDel.js";
import { PaginationData, paginationData } from "./dataSort/pagination.js";

//CreateCart
export const CreateCart = async (data: CartInput, t: Transaction): Promise<number> => {
  const create = await Cart.create(data, { transaction: t });
  return create ? create.toJSON().id : 0;
};

//GetCartByToken
export const GetCartByToken = async (token: string, t?: Transaction):Promise<boolean|FindAttributesCart> => {
  const cart = await Cart.findOne({
    where: { token },
    include: [
      {
        model: CartItems,
        include:[
          {
            model:Products,
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

//GetCartByUserId
export const GetCartByUserId = async (userId: number):Promise<boolean|FindAttributesCart> => {
  const cart = await Cart.findOne({
    where: { userId },
    include: [
      {
        model: CartItems,
        include:[
          {
            model:Products,
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
//GetAllCart
export const GetAllCart = async (token: string|null, userId: number|null,cartId:number|null,offset:number,limit:number):Promise<boolean|PaginationData> => {
  const cart = await Cart.findAll({
    where: conditionGetAllCart(cartId,token, userId, Op),
    include: [
      {
        model: CartItems,
        include:[
          {
            model:Products,
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
  const count=await Cart.count()
  return cart ? paginationData(cart,count,limit,offset) : false;
};

//DeleteCart
export const DeleteCart = async (token: string, t: Transaction):Promise<boolean> => {
  const remove = await Cart.destroy({ where: { token }, transaction: t });
  return !!remove ? true : false;
};

//UpdateStausCart

export const UpdateStausCart=async(token:string,status:number,t:Transaction):Promise<boolean>=>{
    const cart=await Cart.update({status:status},{where:{token},transaction:t})
    return cart[0]?true:false
}

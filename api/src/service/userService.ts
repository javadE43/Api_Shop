import { Transaction } from "sequelize";
import * as usersdal from "../dal/usersDal.js";
import { RemoveImage } from "../helper/removeImage.js";
import { RoleUsers, UpdateUser, UserAttributesOutput, UserInput } from "../models/bo/User.js";
import { sequelize } from "../models/sequelize.js";

//create
export const create = async(payload: UserInput) => {
  const result:boolean=await sequelize.transaction(async(t:Transaction)=>{
    const create = await usersdal.create(payload,t);
    if(create===false){
      if(payload.image){
        RemoveImage(payload.image)
      }
        throw new Error("Request Filed")
    }
    return true
  })
  return result;
};
//update
export const updata = async(id: number, payload: UpdateUser): Promise<boolean> => {
  const result:boolean=await sequelize.transaction(async(t:Transaction)=>{
    const user = await usersdal.getByIdUser(id,t);
    const update = await usersdal.update(id, payload,t);
    if(update===false ){
      if(payload.image){
        RemoveImage(payload.image)
      }
      throw new Error("Request Filed")
    }
    if(user===false){
      if(payload.image){
        RemoveImage(payload.image)
      }
      throw new Error("Request Filed")
    }
   if(typeof user !== "boolean"){
    if(user.image){
      RemoveImage(user.image)
    }
   }
    return true
  })
  return result;
};
// getAllUsers
export const getAllUsers = (
  page: number,
  limit: number,
  condition: string | null,
  role: string | null
): Promise<UserAttributesOutput | boolean> => {
  const users = usersdal.getAllUsers(page, limit, condition, role);
  return users;
};
// getByIdUser
export const getByIdUser = (id: number): Promise<RoleUsers | boolean> => {
  const users = usersdal.getByIdUser(id);
  return users;
};
// getByIdUser
export const getByUsernameAndEmail = (
  username: string,
  email: string
): Promise<RoleUsers | boolean> => {
  const users = usersdal.getByUsernameAndEmail(username, email);
  return users;
};
//deleteBYId
export const deleteById = (id: number): Promise<boolean> => {
  const users = usersdal.deleteById(id);
  return users;
};

//removeMultipleUsers

export const removeMultipleUsers = (id: number[]): Promise<boolean> => {
  const removeMultipleUsers = usersdal.removeMultipleUsers(id);
  return removeMultipleUsers;
};

//UpdateActiveUser
export const UpdateActiveUser = async (id: number, active: boolean): Promise<boolean> => {
  const upAcUser = usersdal.UpdateActiveUser(id, active);
  return upAcUser;
};

//LogoutUser
export const LogOutUser = async (id: number, refreshToken: string): Promise<boolean> => {
  const logOutUser = usersdal.LogOutUser(id, refreshToken);
  return logOutUser;
};

import { Transaction } from "sequelize";
import * as categorysdel from "../dal/categorysDel.js";
import { PaginationData } from "../dal/dataSort/pagination.js";
import { RemoveImage } from "../helper/removeImage.js";
import { CategoryInput, GetByTilteInterface, UpdateDataParams } from "../models/bo/Category.js";
import { sequelize } from "../models/sequelize.js";

//createNewCategory
export const createNewCategory = async (data: CategoryInput): Promise<boolean> => {
  const result: boolean = await sequelize.transaction(async (t: Transaction) => {
    const cat: boolean = await categorysdel.createNewCategory(data, t);
    if (cat === false) {
      if (data.image) {
        RemoveImage(data.image);
      }
      throw new Error("Request Filed");
    }
    return true;
  });
  return result;
};

//UpdateByIdCategory
export const UpdateByIdCategory = async (data: UpdateDataParams, id: number): Promise<boolean> => {
  const result: boolean = await sequelize.transaction(async (t: Transaction) => {
    const cat = await categorysdel.GetById(id, t);
    const update: boolean = await categorysdel.UpdateById(data, id, t);
    if (update === false || typeof cat === "boolean") {
      if (data.image) {
        RemoveImage(data.image);
      }
      throw new Error("Request Filed");
    }
    if (cat.image) {
      RemoveImage(cat.image);
    }
    return true;
  });
  return result;
};

//DeleteByIdCategory
export const DeleteByIdCategory = async (id: number): Promise<boolean> => {
  const result: boolean = await sequelize.transaction(async (t: Transaction) => {
    const category = await categorysdel.GetById(id, t);
    const remove: boolean = await categorysdel.DeleteById(id, t);
    if (remove === false || typeof category === "boolean") {
      throw new Error("Request Filed");
    }
    if (category.image) {
      RemoveImage(category.image);
    }
    return true;
  });
  return result;
};

//GetByTilteCategory
export const GetByTilteCategory = (title: string):Promise<GetByTilteInterface[]|boolean> => {
  return categorysdel.GetByTilte(title);
};

//GetByIdCategory
export const GetByIdCategory = (id: number):Promise<GetByTilteInterface|boolean> => {
  return categorysdel.GetById(id);
};
//GetByIdCategory
export const GetALLCategorys = (
  title: string,
  content: string,
  limit: number,
  offset: number
): Promise<PaginationData | boolean> => {
  return categorysdel.GetALLCategorys(title, content, limit, offset);
};

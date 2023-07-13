import { Request, Response } from "express";
import { validationResult } from "express-validator";
//
import { response } from "../helper/customResponse.js";
import { FindOrderJoinOrderItems } from "../models/bo/Order.js";
import * as orderService from "../service/orderService.js";

//createOrder
export const CreateOrder = async (req: Request, res: Response) => {
  const tokenCart: string = req.query?.tokenCart as string;

  const error = validationResult(req);
  if (!!error.array().length) {
    response({
      res,
      message: " ",
      code: 400,
      data: error.array(),
    });
    return;
  }

  const result: string = await orderService.CreateOrder(req.body, tokenCart);

  if (result) {
    response({
      res,
      message: " ",
      code: 201,
      data: result,
    });
  }
};

//FindOrder
export const FindOrder = async (req: Request, res: Response) => {
  const token: string | null = req.query?.tokenCart ? (req.query?.tokenCart as string) : null;
  const userId: number | null = req.query?.userId ? Number(req.query.userId) : null;
  const orderId: number | null = req.query?.orderId ? Number(req.query.orderId) : null;

  const error = validationResult(req);
  if (!!error.array().length) {
    response({
      res,
      message: " ",
      code: 400,
      data: error.array(),
    });
    return;
  }

  const result: boolean | FindOrderJoinOrderItems[] = await orderService.FindOrder(
    token,
    userId,
    orderId
  );

  if (typeof result === "boolean") {
    response({
      res,
      message: " ",
      code: 403,
    });
  } else {
    response({
      res,
      message: " ",
      code: 200,
      data: result,
    });
  }
};

//DeleteOrderById
export const DeleteOrderById = async (req: Request, res: Response) => {
  const orderId: number = Number(req.query.orderId);
  const error = validationResult(req);
  if (!!error.array().length) {
    response({
      res,
      message: " ",
      code: 400,
      data: error.array(),
    });
    return;
  }

  const result: boolean = await orderService.DeleteOrderBYToken(orderId);

  if (result) {
    response({
      res,
      message: " ",
      code: 200,
      data: result,
    });
  }
};

//Today's income

export const TodaysIncome = async (req: Request, res: Response) => {
  const TODAY_START_DAY = req.query.start ? req.query.start as string : null;
  const NOW_DAY = req.query.end ? req.query.end as string : null;
  const LAST_DATE = req.query.lastDate ? req.query.lastDate as string : null;
  const status = req.query.status ? req.query.status as string : null;
  
  let income: number | [{ todayIncome: string | number | null }];
  income = await orderService.TodaysIncome({TODAY_START:TODAY_START_DAY,now:NOW_DAY,lastDate:LAST_DATE,status:status});
  response({
    res,
    message: "todaysIncome",
    code: 200,
    data: income,
  });
};

import { faker } from '@faker-js/faker';

import { Request, Response, NextFunction } from 'express';

import { celebrate, Segments } from 'celebrate';

import { IOrder, orderShema } from '../middlewares/validatons';

export const orderRouteValidator = celebrate({
  [Segments.BODY]: orderShema,
});

export const createOrder = (req: Request, res: Response, next: NextFunction) => {
  try {
    const order: IOrder = req.body;
    res.status(201).send({ id: faker.string.uuid(), total: order.total });
  } catch (error) {
    next(error);
  }
};

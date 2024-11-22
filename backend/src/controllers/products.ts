import { Request, Response, NextFunction } from 'express';

import { celebrate, Segments } from 'celebrate';

import Product from '../models/product';

import { productSchema } from '../middlewares/validatons';

export const productRouteValidator = celebrate({
  [Segments.BODY]: productSchema,
});

export const getAllProducts = (_req: Request, res: Response, next: NextFunction) => Product.find({})
  .then((items) => (res.send({ items, total: items.length })))
  .catch((err) => next(err));

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  const {
    title,
    image,
    category,
    description,
    price,
  } = req.body;
  return Product.create({
    title,
    image,
    category,
    description,
    price,
  })
    .then(() => res.status(201).send())
    .catch((err) => next(err));
};

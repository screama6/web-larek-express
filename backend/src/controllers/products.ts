import { Request, Response, NextFunction } from 'express';

import { celebrate, Segments } from 'celebrate';

import Product from '../models/product';

import { allProductShema, productSchema } from '../middlewares/validatons';

const newProduct = {
  description: 'Будет стоять над душой и не давать прокрастинировать.',
  image: {
    fileName: '/images/Asterisk_2.png',
    originalName: 'Asterisk_2.png',
  },
  title: 'Мамка-таймер',
  category: 'софт-скил',
  price: null,
};

export const productRouteValidator = celebrate({
  [Segments.BODY]: productSchema,
});

export const allProductRouteValidator = celebrate({
  [Segments.BODY]: allProductShema,
});

export const getAllProducts = (_req: Request, res: Response, next: NextFunction) => Product.find({})
  .then((items) => (res.send({ items, total: items.length })))
  .catch((err) => next(err));

export const createProduct = (_req: Request, res: Response, next: NextFunction) => {
  const {
    title,
    image,
    category,
    description,
    price,
  } = newProduct;
  return Product.create({
    title,
    image,
    category,
    description,
    price,
  })
    .then((product) => res.send(product))
    .catch((err) => next(err));
};

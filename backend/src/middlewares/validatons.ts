import { Joi } from 'celebrate';

export interface IOrder {
  items: string[],
  total: number,
  payment: string,
  email: string,
  phone: string,
  address: string
}

export const orderShema = Joi.object({
  items: Joi.array().required().min(1).max(30)
    .unique(),
  total: Joi.number().required(),
  payment: Joi.string().required().valid('card', 'online'),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
});

const imageSchema = Joi.object({
  fileName: Joi.string().required(),
  originalName: Joi.string().required(),
});

export const productSchema = Joi.object({
  title: Joi.string().required().min(2).max(30),
  image: imageSchema.required(),
  category: Joi.string().required(),
  description: Joi.string(),
  price: Joi.number().default(null),
});

import { isCelebrateError } from 'celebrate';
import BadRequestError from '../errors/bad-request-error';
import ConflictError from '../errors/conflict-error';
import NotFoundError from '../errors/not-found-error';
import { Request, Response, NextFunction } from 'express';
import { Error as MongooseError } from 'mongoose';

export function errorHandler (error: any, req: Request, res: Response, next: NextFunction)  {
  if(isCelebrateError(error)){
    return next(error);
  } else {

    if (error instanceof MongooseError.ValidationError) {
      return next(new BadRequestError("Ошибка валидации данных при создании товара"));
    } 
    if (error instanceof Error && error.message.includes('E11000')) {
      return next(new ConflictError("Ошибка валидации данных при создании товара"));
    }  
    if (error instanceof MongooseError.MongooseServerSelectionError) {
      return next(new NotFoundError("Ошибка валидации данных при создании товара"));
    }
  }
  return res.status(500).send("Ошибка валидации данных при создании товара");
};


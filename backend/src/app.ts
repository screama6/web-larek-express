import express from 'express';

import mongoose from 'mongoose';

import { errors } from 'celebrate';
import path from 'path';
import productRouter from './routes/product';

import orderRouterr from './routes/order';

import errorHandler from './middlewares/error-handler';

import { errorLogger, requestLogger } from './middlewares/logger';

const cors = require('cors');

const { DB_ADDRESS } = process.env;
const app = express();
mongoose.connect(`${DB_ADDRESS}`);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(requestLogger);
app.use('/', productRouter);
app.use('/', orderRouterr);
app.use(express.static(path.join(__dirname, 'public')));
app.use(errorLogger);
app.use(errorHandler);
app.use(errors());
app.listen(3000, () => {});

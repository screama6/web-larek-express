import { Router } from 'express';

import {
  allProductRouteValidator,
  createProduct,
  getAllProducts,
  productRouteValidator,
} from '../controllers/products';

const router = Router();
router.get('/product', allProductRouteValidator, getAllProducts);
router.post('/product', productRouteValidator, createProduct);
export default router;

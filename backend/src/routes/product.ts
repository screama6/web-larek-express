import { Router } from 'express';

import {
  createProduct,
  getAllProducts,
  productRouteValidator,
} from '../controllers/products';

const router = Router();
router.get('/product', getAllProducts);
router.post('/product', productRouteValidator, createProduct);
export default router;

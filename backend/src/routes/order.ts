import { createOrder, orderRouteValidator } from '../controllers/order';
import { Router } from  'express';



const router = Router();

router.post('/order', orderRouteValidator ,createOrder);


export default router;
import { Router } from 'express';
import rescue from 'express-rescue';
import authentication from '../middlewares/authentication';
import { createOrder } from '../services/OrderService';

const routeOrder = Router();

// verificar -> tipagem dos parametros req e res dando erro
routeOrder.post('/', authentication, rescue(async (req, res) => {
  await createOrder(req.body);
  const { id: userId, products } = req.body;

  return res.status(201).json({ order: { userId, products } });
}));

export default routeOrder;
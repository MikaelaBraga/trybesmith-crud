import { Router } from 'express';
import rescue from 'express-rescue';
import authentication from '../middlewares/authentication';
import validateJoiOrder from '../middlewares/validateJoiOrder';
import { createOrder, getAllOrders, getOrderById } from '../services/OrderService';

const routeOrder = Router();

// verificar -> tipagem dos parametros req e res dando erro
routeOrder.post('/', authentication, rescue(async (req, res) => {
  validateJoiOrder(req.body);
  const { id: userId, products } = req.body;
  
  await createOrder(req.body);

  return res.status(201).json({ order: { userId, products } });
}));

// verificar -> tipagem dos parametros req e res dando erro
routeOrder.get('/:id', authentication, rescue(async (req, res) => {
  const { id } = req.params;
  
  const order = await getOrderById(id);

  return res.status(200).json(order);
}));

// verificar -> tipagem dos parametros req e res dando erro
routeOrder.get('/', authentication, rescue(async (req, res) => {
  const orders = await getAllOrders();

  return res.status(200).json(orders);
}));

export default routeOrder;
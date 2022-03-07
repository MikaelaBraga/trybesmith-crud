import { Order } from '../interfaces/IOrder';
import { add } from '../models/OrderModel';

export const createOrder = async (order: Order) => {
  await add(order);
};

export const getAllOrders = () => {};

export const getOrderById = () => {};
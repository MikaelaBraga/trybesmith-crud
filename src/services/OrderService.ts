import { Order } from '../interfaces/IOrder';
import { add, getById } from '../models/OrderModel';
import errorConstructor from '../utils/errorConstructor';

export const createOrder = async (order: Order) => {
  await add(order);
};

export const getOrderById = async (id: string) => {
  const order = await getById(id);

  if (!order) throw errorConstructor('notFound', 'Order not found');

  return order;
};

export const getAllOrders = () => {};
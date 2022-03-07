import { Order } from '../interfaces/IOrder';
import { add, getAll, getById } from '../models/OrderModel';
import errorConstructor from '../utils/errorConstructor';

export const createOrder = async (order: Order) => {
  await add(order);
};

export const getOrderById = async (id: string) => {
  const order = await getById(id);

  if (order === null) throw errorConstructor('notFound', 'Order not found');

  // console.log(order);
  
  return order;
};

export const getAllOrders = async () => {
  const orders = await getAll();

  if (!orders) throw errorConstructor('notFound', 'No orders found');

  return orders;
};
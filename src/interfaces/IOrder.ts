import { IProduct } from './IProduct';
import { IUser } from './IUser';

export interface IOrder {
  id: number,
}

export interface Order extends IOrder {
  products: IProduct[], // array dos produtos
  userId: IUser,
}
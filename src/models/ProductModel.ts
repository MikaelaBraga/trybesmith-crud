import { OkPacket, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/IProduct';

export const add = async (product: Product) => {
  const { name, amout } = product;
  const queryString = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

  const [result] = await connection.query(queryString, [name, amout]);

  const { insertId } = result as OkPacket;

  return { id: insertId, product };
};
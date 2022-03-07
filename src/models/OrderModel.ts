import { OkPacket } from 'mysql2';
import { Order } from '../interfaces/IOrder';
import connection from './connection';

export const add = async (order: Order) => {
  const { userId } = order;
  const queryString = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';

  const [result] = await connection.query(queryString, [userId]);

  const { insertId } = result as OkPacket;

  // atualiza orderId da tabela products quando um pedido é feito
  const updateProduct = order.products.map(async (p) => {
    await connection
      .query('UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?', [insertId, p]);
  });

  return Promise.all(updateProduct).then(() => insertId);
};

export const getAll = async () => {};

// export const getById = async (id: string) => {};
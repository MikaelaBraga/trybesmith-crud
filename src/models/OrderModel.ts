import { OkPacket, RowDataPacket } from 'mysql2';
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

export const getById = async (id: string) => {
  const queryString = `
  SELECT ord.id, ord.userId, prod.id as products
  FROM Trybesmith.Orders AS ord
  INNER JOIN Trybesmith.Products AS prod
  ON prod.orderId = ord.id
  WHERE ord.id = ?`;

  const [result] = await connection.query<RowDataPacket[]>(queryString, [id]);
  if (!result.length) return null;

  const order: Order = {
    id: result[0].id,
    userId: result[0].userId,
    products: result.map((p) => p.products),
  };

  return order;
};

export const getAll = async () => {};

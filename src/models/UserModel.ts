import { OkPacket, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/IUser';

export const add = async (user: User) => {
  const { username, classe, level, password } = user;
  const queryString = `INSERT INTO Trybesmith.Users
  (username, classe, level, password) VALUES (?, ?, ?, ?)`;

  const [result] = await connection.query(queryString, [username, classe, level, password]);

  const { insertId } = result as OkPacket;

  return { id: insertId, username };
};

export const getByUsername = async (username: string) => {
  const queryString = 'SELECT * FROM Trybesmith.Users WHERE username = ?';

  const [result] = await connection.query(queryString, [username]);

  return result as RowDataPacket[0];
};

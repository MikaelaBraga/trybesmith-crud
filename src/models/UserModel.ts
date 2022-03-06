import { OkPacket, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/IUser';

export const add = async (user: IUser) => {
  const { username, classe, level, password } = user;
  const queryString = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)';

  const [result] = await connection.query(queryString, [username, classe, level, password]);

  const { insertId } = query as OkPacket;

  return { id: insertId, username };
};

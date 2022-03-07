import { add, getByUsername } from '../models/UserModel';
import { User } from '../interfaces/IUser';
import { generateToken } from '../utils/jwt';
import errorConstructor from '../utils/errorConstructor';

export const createUser = async (user: User) => {
  const users = await add(user);

  const token = generateToken(users);

  return token;
};

export const login = async (username: string, password: string) => {
  const user = await getByUsername(username);

  if (!user[0] || user[0].password !== password) {
    throw errorConstructor('unauthorized', 'Username or password invalid');
  }

  const token = generateToken({ id: user[0].id, username: user[0].username });

  return token;
};

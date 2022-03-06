import { add } from '../models/UserModel';
import { User } from '../interfaces/IUser';
import { generateToken } from '../utils/jwt';

export const createUser = async (user: User) => {
  const users = await add(user);

  const token = generateToken(users);

  return token;
};

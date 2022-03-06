import { add } from '../models/UserModel';
import { IUser } from '../interfaces/IUser';

const createUser = async (user: IUser) => {
  const user = await add(user);
};
import Joi from 'joi';
import { User } from '../interfaces/IUser';

const userSchema = Joi.object({
  username: Joi.string().min(2),
  classe: Joi.string().min(2),
  level: Joi.number().min(1),
  password: Joi.string().min(7),
});

export default (object: User) => {
  const { error } = userSchema.validate(object);

  if (error) throw error;
};
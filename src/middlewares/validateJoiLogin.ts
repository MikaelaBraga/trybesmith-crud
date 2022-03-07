import Joi from 'joi';
import { ILogin } from '../interfaces/ILogin';

const loginSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': 'Username is required',
    'string.min': 'Username must be longer than 2 characters',
    'string.base': 'Username must be a string',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be longer than 7 characters',
    'string.base': 'Password must be a string',
  }),
});

export default (object: ILogin) => {
  const { error } = loginSchema.validate(object);

  if (error) throw error;
};
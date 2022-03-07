import Joi from 'joi';
import { Order } from '../interfaces/IOrder';

const orderSchema = Joi.object({
  id: Joi.number(),
  products: Joi.array().items(Joi.number().required())
    .required().messages({
      'array.includesRequiredUnknowns': 'Products can\'t be empty',
      'array.base': 'Products must be an array of numbers',
      'any.required': 'Products is required',
    }),
});

export default (object: Order) => {
  const { error } = orderSchema.validate(object);

  if (error) throw error;
};
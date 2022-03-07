import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!Joi.isError(err)) return next(err);
  const { type } = err.details[0];
  // console.log(type);

  if (type === 'any.required') return res.status(400).json({ error: err.message });

  return res.status(422).json({ error: err.message });
};
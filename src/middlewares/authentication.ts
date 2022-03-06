import { RequestHandler } from 'express';
import errorConstructor from '../utils/errorConstructor';
import { verifyToken } from '../utils/jwt';

export const auth: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) throw errorConstructor('unauthorized', 'Token not found');

  const { id } = verifyToken(token);
  req.body.id = id;

  return next();
};

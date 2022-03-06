import { Request, Response, NextFunction } from 'express';
import errorConstructor from '../utils/errorConstructor';
import { verifyToken } from '../utils/jwt';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) throw errorConstructor('unauthorized', 'Token not found');

  const { id } = verifyToken(token);
  req.body.id = id;

  return next();
};

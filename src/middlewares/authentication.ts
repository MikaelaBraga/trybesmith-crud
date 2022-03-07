import { Request, Response, NextFunction } from 'express';
import errorConstructor from '../utils/errorConstructor';
import { verifyToken } from '../utils/jwt';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) throw errorConstructor('unauthorized', 'Token not found');

  try {
    const { id } = verifyToken(token);
    req.body.id = id;
  
    return next(); 
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

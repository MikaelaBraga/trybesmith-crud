import { Request, Response, NextFunction } from 'express';
import { IDomainErrorMap } from '../../interfaces/IDomainErrorMap';

const errorMap: IDomainErrorMap = {
  unauthorized: 401,
};

export default (err, req: Request, res: Response, next: NextFunction) => {
  if (!err.message) return next();

  return res.status(errorMap[err.code]).json({ error: err.message });
};
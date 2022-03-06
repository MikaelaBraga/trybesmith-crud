import { RequestHandler } from 'express';

export const auth: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) throw 
}
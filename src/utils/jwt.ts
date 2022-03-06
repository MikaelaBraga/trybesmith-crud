import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { PayloadJwt } from '../interfaces/PayloadJwt';

const JWT_SECRET = 'senhasecreta';

export const generateToken = (payload: PayloadJwt) => sign(payload, JWT_SECRET, {
  algorithm: 'HS256',
  expiresIn: '1h',
});

export const verifyToken = (token: string): JwtPayload =>
  verify(token, JWT_SECRET, { algorithms: ['HS256'] }) as JwtPayload;

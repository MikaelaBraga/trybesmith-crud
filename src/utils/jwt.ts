import { JwtPayload, sign, verify } from 'jsonwebtoken';

const JWT_SECRET = 'senhasecreta';

export const generateToken = (payload) => sign(payload, JWT_SECRET, {
  algorithm: 'HS256',
  expiresIn: '1h',
});

export const verifyToken = (token: string): JwtPayload =>
  verify(token, JWT_SECRET, { algorithms: ['HS256'] }) as JwtPayload;

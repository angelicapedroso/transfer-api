import * as jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret';

const jwtConfig: object = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export const generateToken = (payload: string) =>
  jwt.sign({ payload }, SECRET, jwtConfig);

export const verifyToken = (token: string) => jwt.verify(token, SECRET);

import jwt, { SignOptions } from 'jsonwebtoken';
import { ILogin } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7h',
};

const generateToken = (payload: ILogin) => jwt.sign({ payload }, JWT_SECRET, JWT_CONFIG);

const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET);

const authentication = { generateToken, verifyToken };

export default authentication;
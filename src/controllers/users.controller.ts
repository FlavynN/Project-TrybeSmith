import { Request, Response } from 'express';
import authentication from '../auth/token';
import { ILogin } from '../interfaces';
import usersService from '../services/users.service';

const createUser = async (req: Request, res: Response) => {
  const { body } = req;
  const { username } = body;
  await usersService.createUser(body);
  const token = authentication.generateToken(username);
  return res.status(201).json({ token });
};

const login = async (req: Request<object, object, ILogin>, res: Response) => {
  const { body } = req;
  const { type, message } = await usersService.loginFunction(body);
  if (type) return res.status(401).json({ message });
  res.status(200).json({ token: message });
};

const usersCotroller = { createUser, login };

export default usersCotroller;
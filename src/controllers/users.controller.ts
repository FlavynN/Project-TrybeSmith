import { Request, Response } from 'express';
import { ILogin } from '../interfaces';

import usersService from '../services/users.service';

const login = async (req: Request<object, object, ILogin>, res: Response) => {
  const { body } = req;
  const { type, message } = await usersService.loginFunction(body);
  if (type) return res.status(401).json({ message });
  res.status(200).json({ token: message });
};

const usersCotroller = { login };

export default usersCotroller;
import authentication from '../auth/token';
import { ILogin } from '../interfaces';
import usersModel from '../models/users.model';

const loginFunction = async (login: ILogin) => {
  const users = await usersModel.loginModel(login);

  if (users.length === 0 || users[0].password !== login.password) {
    return { type: 'INVALID_VALUES', message: 'Username or password invalid' };
  }
  const token = authentication.generateToken(users[0]);

  return { type: null, message: token };
};

const usersService = { loginFunction };

export default usersService;
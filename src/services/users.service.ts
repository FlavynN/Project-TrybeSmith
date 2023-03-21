import authentication from '../auth/token';
import { ILogin, IUser } from '../interfaces';
import usersModel from '../models/users.model';

const createUser = async (user: IUser) => {
  const newUser = await usersModel.newUser(user);
  return newUser;
};

const loginFunction = async (login: ILogin) => {
  const users = await usersModel.loginModel(login);

  if (users.length === 0 || users[0].password !== login.password) {
    return { type: 'INVALID_VALUES', message: 'Username or password invalid' };
  }

  const token = authentication.generateToken(users[0]);
  return { type: null, message: token };
};

const usersService = { createUser, loginFunction };

export default usersService;
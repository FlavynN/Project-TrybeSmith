import express from 'express';
import usersCotroller from '../controllers/users.controller';
import validateLogin from '../middlewares/validateLogin';

const loginRoute = express.Router();

loginRoute.post('/', validateLogin.validatePassword, usersCotroller.login);

export default loginRoute;
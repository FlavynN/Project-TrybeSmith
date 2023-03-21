import express from 'express';
import usersCotroller from '../controllers/users.controller';

const userRoute = express.Router();

userRoute.post('/', usersCotroller.createUser);

export default userRoute;
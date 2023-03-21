import express from 'express';
import loginRoute from './routes/loginRoute';
import productRoute from './routes/productRoute';
import userRoute from './routes/usersRoute';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/login', loginRoute);

export default app;
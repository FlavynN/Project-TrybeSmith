import express from 'express';
import loginRoute from './routes/loginRoute';
import productRoute from './routes/productRoute';
import userRoute from './routes/usersRoute';
import ordersRoute from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/login', loginRoute);
app.use('/orders', ordersRoute);

export default app;
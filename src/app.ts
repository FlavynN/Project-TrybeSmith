import express from 'express';
import productRoute from './routes/productRoute';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users');

export default app;

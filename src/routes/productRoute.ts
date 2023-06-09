import express from 'express';
import productController from '../controllers/product.controller';

const productRoute = express.Router();

productRoute.post('/', productController.newProduct);
productRoute.get('/', productController.getAll);

export default productRoute;
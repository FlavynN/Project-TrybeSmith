import { Request, Response } from 'express';
import productService from '../services/product.service';

const newProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const addProduct = await productService.addProduct(body);
  return res.status(201).json(addProduct);
};

const getAll = async (_req: Request, res: Response) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

const productController = { newProduct, getAll };

export default productController;
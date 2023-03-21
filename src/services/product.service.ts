import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

const addProduct = async (product: IProduct) => {
  const newProduct = await productModel.insertProduct(product);
  return newProduct;
};

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const productService = { addProduct, getAll };

export default productService;
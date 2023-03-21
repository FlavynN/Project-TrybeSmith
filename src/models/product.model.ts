import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

const insertProduct = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `
  INSERT INTO Trybesmith.products 
  (name, amount) 
  VALUES (?, ?)`,
    [name, amount],
  );
  return { id: insertId, ...product };
};

const getAll = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute<IProduct[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products;
  `);
  return products;
};

const productModel = { insertProduct, getAll };

export default productModel;
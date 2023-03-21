import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IOrder } from '../interfaces';

const getOrders = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute<IOrder[] & RowDataPacket[]>(
    `SELECT orders.id, user_id as userId, JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders
    INNER JOIN Trybesmith.users ON orders.id = users.id
    INNER JOIN Trybesmith.products ON orders.id = products.order_id
    GROUP BY Trybesmith.orders.id `,
  
  );
  return orders;
};

const ordersModel = { getOrders };

export default ordersModel;
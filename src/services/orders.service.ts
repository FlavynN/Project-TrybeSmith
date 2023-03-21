import ordersModel from '../models/orders.model';
import { IOrder } from '../interfaces';

const getAllOrders = async ():Promise<IOrder[]> => {
  const getOrders = await ordersModel.getOrders();
  return getOrders;
};

const ordersService = { getAllOrders };

export default ordersService;
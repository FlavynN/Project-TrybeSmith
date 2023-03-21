import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getOrders = async (_req: Request, res: Response) => {
  const getAllOrders = await ordersService.getAllOrders();
  return res.status(200).json(getAllOrders);
};

const ordersController = { getOrders };

export default ordersController;
import { type Request, type Response } from 'express';
import { OrdersApi } from '../../../../integrations/gift-lov/orders-api';

export const create = async (req: Request, res: Response) => {
  const { itemId: cardItemId, price } = req.body;

  const ordersApi = new OrdersApi();

  const user = req.currentUser;

  const [ firstName, ...restName] = user!.fullName.split(' ');

  const payload = {
    customerName: user!.fullName,
    firstName,
    lastName: restName.join(' '),
    deliveryChannel: 'api',
    languageCode: 'EN',
    referenceNo: `${cardItemId}-${Date.now()}`,
    lineItems: [
      { cardItemId, value: price.toString() }
    ],
  };

  const response = await ordersApi.placeOrder(
    payload,
    req.currentUser!.token as string,
  );

  const order = await ordersApi.orders(response.id, req.currentUser!.token as string);

  return res.send(order);
};

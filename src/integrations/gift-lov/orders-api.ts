import { RequestMethod } from '../../types/enums/request-method';
import { GiftLovBase } from './base';

import { type GiftLovRequestBase } from '../../types/interfaces/gift-lov/requests/base';
import { type PlaceOrderResponse } from '../../types/interfaces/gift-lov/responses/place-order';
import { type PlaceOrderRequest } from '../../types/interfaces/gift-lov/requests/place-order';
import { type OrdersResponse } from '../../types/interfaces/gift-lov/responses/orders';

export class OrdersApi extends GiftLovBase {
  async placeOrder(payload: PlaceOrderRequest, token: string): Promise<PlaceOrderResponse> {
    return this.request<PlaceOrderRequest, PlaceOrderResponse>(
      'placeOrder', RequestMethod.POST, { languageCode: 'EN' }, payload,  this.authHeader(token)
    );
  }

  async orders(identifier: string, token: string): Promise<OrdersResponse> {
    return this.request<GiftLovRequestBase, OrdersResponse>(
      `orders/${identifier}`, RequestMethod.GET, {}, {}, this.authHeader(token)
    );
  }
}

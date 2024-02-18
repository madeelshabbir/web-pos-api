import { RequestMethod } from '../../types/enums/request-method';
import { GiftLovBase } from './base';

import { type ItemsRequest } from '../../types/interfaces/gift-lov/requests/items';
import { type ItemsResponse } from '../../types/interfaces/gift-lov/responses/items';
import { type CheckItemAvailabilityResponse } from '../../types/interfaces/gift-lov/responses/check-item-availability';
import { type GiftLovRequestBase } from '../../types/interfaces/gift-lov/requests/base';

export class CatalogueApi extends GiftLovBase {
  async items(payload: ItemsRequest, token: string): Promise<ItemsResponse> {
    return this.request<ItemsRequest, ItemsResponse>(
      'items', RequestMethod.GET, payload, {}, this.authHeader(token)
    );
  }

  async checkItemAvailability(cardIdentifier: string, value: string, token: string): Promise<CheckItemAvailabilityResponse> {
    return this.request<GiftLovRequestBase, CheckItemAvailabilityResponse>(
      `checkItemAvailability/${cardIdentifier}/${value}`, RequestMethod.GET, {}, {}, this.authHeader(token)
    );
  }
}

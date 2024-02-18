import { Base } from '../base';
import { GiftLovHeaderGenerator } from '../../services/gift-lov/header-generator';
import { RequestHeaderKey } from '../../types/enums/request-header-key';
import { RequestMethod } from '../../types/enums/request-method';
import { RequestMimeType } from '../../types/enums/request-mime-type';

import { type GiftLovResponseBase } from '../../types/interfaces/gift-lov/responses/base';
import { type GiftLovRequestBase } from '../../types/interfaces/gift-lov/requests/base';

export abstract class GiftLovBase extends Base {
  constructor(
    headers: Partial<Record<RequestHeaderKey, string>> = {},
    timeout: number = 10000,
  ) {
    super(process.env.GIFT_LOV_API_BASE_URL!, headers, timeout);
  }

  protected async request<T = GiftLovRequestBase, R = GiftLovResponseBase>(
    route: string,
    method: RequestMethod = RequestMethod.GET,
    params: GiftLovRequestBase = {},
    body: GiftLovRequestBase = {},
    headers: Partial<Record<RequestHeaderKey, string>> = {},
  ): Promise<R> {
    const response = await super.request<T, R>(
      route, method, params, body, this.headers(route, method, params, headers)
    );
    return response;
  }

  protected authHeader(token: string) {
    return { [RequestHeaderKey.AUTHORIZATION]: token };
  }

  protected headers(
    route: string,
    method: RequestMethod,
    params: Record<string,  string> = {},
    headers: Partial<Record<RequestHeaderKey, string>> = {
      [RequestHeaderKey.AUTHORIZATION]: ''
    },
  ): Partial<Record<RequestHeaderKey, string>> {
    const date = GiftLovHeaderGenerator.generateDateString();
    const signature = GiftLovHeaderGenerator.generateSignatureHash(
      route,
      method,
      headers[RequestHeaderKey.AUTHORIZATION]!,
      date,
      params,
    );

    return {
      [RequestHeaderKey.ACCEPT]: RequestMimeType.JSON,
      [RequestHeaderKey.GIFT_LOV_DATE]: date,
      [RequestHeaderKey.SIGNATURE]: signature,
      ...headers,
    }
  }
}

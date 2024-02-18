import axios from 'axios';

import { RequestMethod } from '../types/enums/request-method';
import { ServiceUnavailableError } from '../errors/service-unavailable-error';
import { UnprocessableEntityError } from '../errors/unprocessable-entity-error';

import { type RequestHeaderKey } from '../types/enums/request-header-key';

export abstract class Base {
  private readonly axios;

  constructor(
    baseURL: string,
    headers: Partial<Record<RequestHeaderKey, string>> = {},
    timeout: number = 10000,
  ) {
    this.axios = axios.create({ baseURL, timeout, headers });
  }

  protected async request<T, R>(
    route: string,
    method: RequestMethod = RequestMethod.GET,
    params: Record<string, string> = {},
    body: Record<string, any> = {},
    headers: Partial<Record<RequestHeaderKey, string>> = {}
  ): Promise<R | never> {
    try {
      const response = await this.axios.request<T, R>({
        url: route,
        method,
        params,
        data: body,
        headers,
      });

      return response;
    } catch (err: any) {
      if (err.response) {
        throw new UnprocessableEntityError(err.response.data.message);
      } else {
        throw new ServiceUnavailableError();
      }
    }
  }
}

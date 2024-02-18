import { RequestMethod } from '../../types/enums/request-method';
import { GiftLovBase } from './base';

import { type GenerateTokenResponse } from '../../types/interfaces/gift-lov/responses/generate-token';
import { type GenerateTokenRequest } from '../../types/interfaces/gift-lov/requests/generate-token';
import { type GiftLovRequestBase } from '../../types/interfaces/gift-lov/requests/base';
import { type CheckTokenResponse } from '../../types/interfaces/gift-lov/responses/check-token';

export class AuthorizationApi extends GiftLovBase {
  async generateToken(payload: GenerateTokenRequest): Promise<GenerateTokenResponse> {
    return this.request<GenerateTokenRequest, GenerateTokenResponse>(
      'generateToken', RequestMethod.POST, {}, payload
    );
  }

  async checkToken(token: string) {
    return this.request<GiftLovRequestBase, CheckTokenResponse>(
      'checkToken', RequestMethod.POST, {}, {}, this.authHeader(token)
    );
  }
}

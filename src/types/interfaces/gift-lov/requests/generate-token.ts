import { GiftLovRequestBase } from './base';

export interface GenerateTokenRequest extends GiftLovRequestBase {
  username: string;
  password: string;
};

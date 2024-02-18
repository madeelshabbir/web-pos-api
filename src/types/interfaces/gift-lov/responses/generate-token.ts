import { GiftLovResponseBase } from './base';

export interface GenerateTokenResponse extends GiftLovResponseBase {
  token: string;
  fullName: string;
  organization: string;
  expireDate: string;
  privileges: string[];
  configurations: Record<string, any>;
}

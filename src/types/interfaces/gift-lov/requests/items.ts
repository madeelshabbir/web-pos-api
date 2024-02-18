import { GiftLovRequestBase } from './base';

export interface ItemsRequest extends GiftLovRequestBase {
  current: string;
  rowCount: string;
};

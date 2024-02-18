import { Item } from '../item';
import { GiftLovResponseBase } from './base';

export interface ItemsResponse extends GiftLovResponseBase {
  items: Item[];
  total: number;
  rowCount: number;
  current: number;
}

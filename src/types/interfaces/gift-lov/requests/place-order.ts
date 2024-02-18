import { GiftLovRequestBase } from './base';

interface LineItem {
  cardItemId: string;
  value: number;
};

export interface PlaceOrderRequest extends GiftLovRequestBase {
  customerName: string;
  firstName: string;
  lastName: string;
  referenceNo?: string;
  deliveryChannel: string;
  contactNumber?: string;
  smsMobileNumber?: string;
  emailAddress?: string;
  additionalParameters?: Record<string, any>;
  countryCode?: string;
  languageCode?: string;
  orderDate?: string;
  lineItems: LineItem[];
};

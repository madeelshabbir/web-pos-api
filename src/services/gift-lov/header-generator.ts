import { createHmac } from 'crypto';

import { type RequestMethod } from '../../types/enums/request-method';

export namespace GiftLovHeaderGenerator {
  export const generateSignatureHash = (
    route: string,
    method: RequestMethod,
    token: string,
    giftlovDate: string,
    params: Record<string,  string> = {},
  ) => {
    const paramsStr = extractValues(params).sort().join('');
    const content = `${route}${method}${paramsStr}${giftlovDate}${token}`;

    const hmacSha512 = createHmac('sha512', process.env.GIFT_LOV_SECRET!);
    hmacSha512.update(content, 'utf-8');

    return hmacSha512.digest().toString('hex').toLowerCase();
  }

  export const extractValues = (obj: Record<string, any>): Array<string | number> => {
    const values = [];

    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        values.push(...extractValues(obj[key]));
      } else if (Array.isArray(obj[key])) {
        obj[key].forEach((item: any) => {
          values.push(...extractValues(item));
        });
      } else {
        values.push(obj[key]);
      }
    }

    return values;
  }

  export const generateDateString = () => {
    const date = new Date();

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${day}${month}${year}${hours}${minutes}${seconds}`;
  }
};

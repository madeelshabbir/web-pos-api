import jwt from 'jsonwebtoken';

import { type NextFunction, type Request, type Response } from 'express';

import { RequestHeaderKey } from '../types/enums/request-header-key';
import { AuthorizationApi } from '../integrations/gift-lov/authorization-api';

import { type GenerateTokenResponse } from '../types/interfaces/gift-lov/responses/generate-token';

declare global {
  namespace Express {
    interface Request {
      currentUser?: GenerateTokenResponse;
    }
  }
}

export const currentUser = async (
  req: Request,
  _: Response,
  next: NextFunction,
): Promise<void> => {
  const jwtToken = req.headers[RequestHeaderKey.AUTHORIZATION] as string;
  if (!jwtToken) {
    return next();
  }

  const { token } = (jwt.verify(jwtToken, process.env.GIFT_LOV_SECRET!) ?? {}) as { token?: string };

  if (token) {
    const response = await new AuthorizationApi().checkToken(token);
    req.currentUser = response.data;
  }

  next();
};

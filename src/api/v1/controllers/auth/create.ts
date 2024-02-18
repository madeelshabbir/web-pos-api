import jwt from 'jsonwebtoken';

import { type Request, type Response } from 'express';

import { AuthorizationApi } from '../../../../integrations/gift-lov/authorization-api';
import { RequestHeaderKey } from '../../../../types/enums/request-header-key';

export const create = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await new AuthorizationApi().generateToken({ username, password });

  const expiresIn = Math.ceil((new Date(user.expireDate).getTime() - Date.now())).toString();
  const token = jwt.sign({ token: user.token }, process.env.GIFT_LOV_SECRET!, { expiresIn });
  delete user.token;

  return res.set({
    'Access-Control-Expose-Headers': RequestHeaderKey.AUTHORIZATION,
    [RequestHeaderKey.AUTHORIZATION]: token,
  }).status(201).send(user);
};

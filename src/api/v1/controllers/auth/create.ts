import jwt from 'jsonwebtoken';

import { type Request, type Response } from 'express';

import { AuthorizationApi } from '../../../../integrations/gift-lov/authorization-api';
import { RequestHeaderKey } from '../../../../types/enums/request-header-key';

export const create = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const response = await new AuthorizationApi().generateToken({ username, password });
  const user = response.data;

  const expiresIn = Math.ceil((new Date(user.expireDate).getTime() - Date.now()) / 1000).toString();
  const token = jwt.sign({ token: user.token }, process.env.GIFT_LOV_SECRET!, { expiresIn });
  delete user.token;

  return res.set(RequestHeaderKey.AUTHORIZATION, token).status(201).send(user);
};

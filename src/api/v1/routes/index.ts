import { Router } from 'express';

import { authRouter } from './auth';
import { itemsRouter } from './items';
import { orderRouter } from './orders';

export const v1Router = Router().use(
  '/api/v1',
  authRouter,
  itemsRouter,
  orderRouter,
);

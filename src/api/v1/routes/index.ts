import { Router } from 'express';

import { authRouter } from './auth';
import { itemsRouter } from './items';

export const v1Router = Router().use(
  '/api/v1',
  authRouter,
  itemsRouter,
);

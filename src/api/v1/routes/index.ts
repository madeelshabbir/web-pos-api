import { Router } from 'express';

import { authRouter } from './auth';

export const v1Router = Router().use(
  '/api/v1',
  authRouter,
);

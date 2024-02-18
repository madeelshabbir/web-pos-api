import { type Request, type Response, type NextFunction } from 'express';

import { UnauthorizedError } from '../errors/unauthorized-error';

export const authorize = (
  req: Request,
  _: Response,
  next: NextFunction,
): void => {
  if (!req.currentUser) {
    throw new UnauthorizedError();
  }

  next();
};

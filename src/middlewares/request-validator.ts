import { validationResult } from 'express-validator';

import { type NextFunction, type Request, type Response } from 'express';

import { RequestValidationError } from '../errors/request-validation-error';

export const requestValidator = (
  req: Request,
  _: Response,
  next: NextFunction,
): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  next();
};

import { type Request, type Response, type NextFunction } from 'express';

import { CustomError } from '../errors/custom-error';

export const errorHanlder = (
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ error: err.serialize() });
  }

  return res.status(422).send({ error: { general: err.message } });
};

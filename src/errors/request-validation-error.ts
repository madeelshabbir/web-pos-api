import { type ValidationError } from 'express-validator';

import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(private readonly errors: ValidationError[]) {
    super('Invalid request parameters');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serialize(): Record<string, string> {
    return this.errors.reduce((acc, error) => {
      return { ...acc, [error.param]: error.msg };
    }, {});
  }
};

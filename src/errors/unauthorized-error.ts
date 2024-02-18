import { UnprocessableEntityError } from './unprocessable-entity-error';

export class UnauthorizedError extends UnprocessableEntityError {
  statusCode = 401;

  constructor() {
    super('Unauthorized to perform this action');

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}

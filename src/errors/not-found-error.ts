import { UnprocessableEntityError } from './unprocessable-entity-error';

export class NotFoundError extends UnprocessableEntityError {
  statusCode = 404;

  constructor() {
    super('Not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

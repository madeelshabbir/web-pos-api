import { UnprocessableEntityError } from './unprocessable-entity-error';

export class ServiceUnavailableError extends UnprocessableEntityError {
  statusCode = 503;

  constructor() {
    super('Service unavailable');

    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
  }
}

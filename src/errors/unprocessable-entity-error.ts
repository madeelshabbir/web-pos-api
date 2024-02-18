import { CustomError } from './custom-error';

export class UnprocessableEntityError extends CustomError {
  statusCode = 422;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
  }

  serialize(): Record<string, string> {
    return { general: this.message };
  }
}

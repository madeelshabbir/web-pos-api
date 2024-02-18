import { NotFoundError } from '../errors/not-found-error';

export const invalidRoutes = (): void => {
  throw new NotFoundError();
};

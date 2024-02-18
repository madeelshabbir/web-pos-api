import { type Request, type Response } from 'express';

export const index = (req: Request, res: Response): void => {
  if (req.currentUser) {
    delete req.currentUser.token;
  }

  res.send(req.currentUser ?? {});
};

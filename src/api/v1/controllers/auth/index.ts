import { type Request, type Response } from 'express';

export const index = (req: Request, res: Response): void => {
  res.send(req.currentUser ?? {});
};

import { type Request, type Response } from 'express';

import { CatalogueApi } from '../../../../integrations/gift-lov/catalogue-api';

export const index = async (req: Request, res: Response) => {
  const { current = '1', rowCount = '100'} = req.query;

  const response = await new CatalogueApi().items(
    { current: current.toString(), rowCount: rowCount.toString() },
    req.currentUser!.token as string
  );

  return res.send(response);
};

import { type Request, type Response } from 'express';

import { CatalogueApi } from '../../../../integrations/gift-lov/catalogue-api';

export const verify = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { price } = req.body;

  const response = await new CatalogueApi().checkItemAvailability(
    id,
    price.toString(),
    req.currentUser!.token as string
  );

  return res.send(response);
};

import { type RequestHandler, Router } from 'express';

import { currentUser } from '../../../../middlewares/current-user';
import { authorize } from '../../../../middlewares/authorize';
import { index } from '../../controllers/items';
import { itemsValidations } from '../../request-validations/items';
import { requestValidator } from '../../../../middlewares/request-validator';
import { verify } from '../../controllers/items/verify';

const router = Router({ mergeParams: true });

router.route('/')
  .get(
    currentUser,
    authorize,
    index);

router.post(
  '/:id/verify',
  currentUser,
  authorize,
  ...itemsValidations.verify,
  requestValidator,
  verify,
);

export const itemsRouter = Router({ mergeParams: true }).use('/items', router);

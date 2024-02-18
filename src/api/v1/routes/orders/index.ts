import { type RequestHandler, Router } from 'express';

import { requestValidator } from '../../../../middlewares/request-validator';
import { ordersValidations } from '../../request-validations/orders';
import { currentUser } from '../../../../middlewares/current-user';
import { authorize } from '../../../../middlewares/authorize';
import { create } from '../../controllers/orders/create';

const router = Router({ mergeParams: true });

router.route('/')
  .post(
    currentUser,
    authorize,
    ...ordersValidations.create,
    requestValidator,
    create
  );

export const orderRouter = Router({ mergeParams: true }).use('/orders', router);

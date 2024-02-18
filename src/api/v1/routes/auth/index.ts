import { type RequestHandler, Router } from 'express';

import { create } from '../../controllers/auth/create';
import { requestValidator } from '../../../../middlewares/request-validator';
import { authValidations } from '../../request-validations/auth';
import { currentUser } from '../../../../middlewares/current-user';
import { authorize } from '../../../../middlewares/authorize';
import { index } from '../../controllers/auth';

const router = Router({ mergeParams: true });

router.route('/')
  .get(
    currentUser as RequestHandler,
    authorize,
    index)
  .post(
    ...authValidations.create,
    requestValidator,
    create as RequestHandler,
  )

export const authRouter = Router({ mergeParams: true }).use('/auth', router);

import { type RequestHandler, Router } from 'express';

import { create } from '../../controllers/auth/create';
import { requestValidator } from '../../../../middlewares/request-validator';
import { authValidations } from '../../request-validations/auth';

const router = Router({ mergeParams: true });

router.route('/')
  .post(
    ...authValidations.create,
    requestValidator,
    create as RequestHandler,
  )

export const authRouter = Router({ mergeParams: true }).use('/auth', router);

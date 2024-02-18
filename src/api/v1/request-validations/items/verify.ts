import { body } from 'express-validator';

export const verify = [
  body('price')
    .isFloat({ min: 0 })
    .withMessage('must be non negative.'),
];

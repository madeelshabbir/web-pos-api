import { body } from 'express-validator';

export const create = [
  body('itemId')
    .isString()
    .not()
    .isEmpty()
    .withMessage('is missing.'),
  body('price')
    .isFloat({ min: 0 })
    .withMessage('must be non negative.'),
];

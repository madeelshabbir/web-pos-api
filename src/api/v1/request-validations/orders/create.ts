import { body } from 'express-validator';

export const create = [
  body('itemId')
    .isString()
    .not()
    .isEmpty()
    .withMessage('Required'),
  body('price')
    .isFloat({ min: 1 })
    .withMessage('must be at least 1'),
];

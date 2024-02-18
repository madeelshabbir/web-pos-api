import { body } from 'express-validator';

export const create = [
  body('username')
    .isString()
    .trim()
    .not()
    .isEmpty()
    .withMessage('is missing.'),
  body('password')
    .isString()
    .not()
    .isEmpty()
    .withMessage('is missing.'),
];

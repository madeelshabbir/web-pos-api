import { body } from 'express-validator';

export const create = [
  body('username')
    .isString()
    .trim()
    .not()
    .isEmpty()
    .withMessage('Required'),
  body('password')
    .isString()
    .not()
    .isEmpty()
    .withMessage('Required'),
];

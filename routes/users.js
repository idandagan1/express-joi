const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const Joi = require('@hapi/joi');

const loginSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required().error(new Error('Username is not valid')),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('Password is not valid')),,
});

module.exports = {
  validateLogin: validate(loginSchema),
  login(req, res, next) {
    res.status(200).send('Login succeeded');
  }
}

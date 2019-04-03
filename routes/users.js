const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const Joi = require('joi');

const getSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
});

/* GET users listing. */
router.get('/', validate(getSchema), (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;

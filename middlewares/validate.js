const Joi = require('joi');

module.exports = (schema, options = { allowUnknown: false, convert: true }, type = 'query') => {
  return (req, res, next) => {
    const { error } = Joi.validate(req[type], schema, options);

    if (error) {
      const errorObj = new Error('BadRequest');
      errorObj.statusCode = 400;
      errorObj.message = error.message;

      return next(errorObj);
    }

    return next();
  };
};

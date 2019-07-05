const usersController = require('./users');

module.exports = app => {

  /* GET home page. */
  app.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  });

  app.post('/users/login', usersController.validateLogin, usersController.login);

}

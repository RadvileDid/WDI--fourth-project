const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const auth  = require('../controllers/auth');
const users = require('../controllers/users');

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/user/:id')
  .get(users.show)
  .put(secureRoute, users.update);

router.all('/*', (req, res) => res.notFound());

module.exports = router;

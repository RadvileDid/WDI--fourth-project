const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const auth  = require('../controllers/auth');
const users = require('../controllers/users');
const videos = require('../controllers/videos');


router.get('/', (req, res) => res.render('index'));

router.route('/videos')
  .get(videos.index);

router.route('/new')
  .post(secureRoute, videos.create);

router.route('/videos/:id')
  .get(videos.show)
  .delete(secureRoute, videos.delete);

router.route('/videos/:id/upvote')
  .post(secureRoute, videos.upvote);

// << auth >>
router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// << user profile >>
router.route('/user/:id')
  .get(users.show)
  .put(secureRoute, users.update);

router.all('/*', (req, res) => res.notFound());

module.exports = router;

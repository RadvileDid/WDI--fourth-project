const User = require('../models/user');
const Video = require('../models/video');

function usersShowRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      if (!user) return res.notFound();

      Video
        .find({ createdBy: user.id })
        .exec()
        .then(videos => {
          return res.status(200).json({ user, videos });
        });
    })
    .catch(next);
}

function usersUpdateRoute(req, res, next) {
  User
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(user => {
      if (!user) return res.notFound();
      return res.status(200).json(user);
    })
    .catch(next);
}

module.exports = {
  show: usersShowRoute,
  update: usersUpdateRoute
};

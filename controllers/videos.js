const Video = require('../models/video');

function videosIndex(req, res, next) {
  const tenAgo = new Date((new Date().getTime() - (10 * 24 * 60 * 60 * 1000)));
  Video
    .find({'createdAt': { $gte: tenAgo }}).sort({'createdAt': -1}).limit(10)
    .populate('upvotes.createdBy createdBy')
    .exec()
    .then(videos => res.json(videos))
    .catch(next);
}

// {"date": {$gte: new Date((new Date().getTime() - (10 * 24 * 60 * 60 * 1000)))}}
// ).sort({ "date": -1 })

function videosCreate(req, res, next) {
  req.body.createdBy = req.currentUser;
  Video
    .create(req.body)
    .then(video => res.status(201).json(video))
    .catch(next);
}

function videosDelete(req, res, next) {
  Video
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
}

function videosShow(req, res, next) {
  Video
    .findById(req.params.id)
    .exec()
    .then((video) => {
      if(!video) return res.notFound();
      res.json(video);
    })
    .catch(next);
}

function upvoteRoute(req, res, next) {
  Video
    .findById(req.params.id)
    .exec()
    .then((video) => {
      if(!video) return res.notFound();
      if(video.upvotes.indexOf(req.currentUser._id) > -1) {
        throw new Error('You already have voted');
      }
      video.upvotes.push(req.currentUser.id);
      return video.save();
    })
    .then(video => res.json(video))
    .catch(next);
}

module.exports = {
  index: videosIndex,
  create: videosCreate,
  delete: videosDelete,
  show: videosShow,
  upvote: upvoteRoute
};

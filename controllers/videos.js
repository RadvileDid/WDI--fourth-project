const Video = require('../models/video');
const DAY_MS = 24 * 60 * 60 * 1000;

function videosIndex(req, res, next) {
  const limitOfDays = 10;
  const tenDaysAgoDate = new Date((new Date().getTime() - (limitOfDays * DAY_MS)));
  const maxVideosPerDay = 5;

  // Video
  //   .find({'createdAt': { $gte: tenAgo }})
  //   .sort({'createdAt': -1})
  //   .limit(20)
  //   .populate('upvotes.createdBy createdBy')
  Video.aggregate([
    {
      $match: { createdAt: { $gte: tenDaysAgoDate }}
    },
    {
      $project: {
        video: '$$ROOT',
        yymmdd: {
          $dateToString: {
            date: '$createdAt',
            format: '%Y-%m-%d'
          }
        }
      }
    },
    {
      $unwind: '$video.upvotes'
    },
    {
      '$group': {
        _id: '$video._id',
        yymmdd: { $first: '$yymmdd'} ,
        video: { $first: '$video'},
        totalVotes: { '$sum': 1}
      }
    },
    {
      $sort: { totalVotes: -1 }
    },
    {
      $group: {
        _id: {
          yymmdd: '$yymmdd'
        },
        videos: { $push: '$$ROOT'}
      }
    }, {
      $project: {
        videos: { $slice: ['$videos', maxVideosPerDay] }
      }
    }, {
      $sort: {'_id.yymmdd': -1}
    }
  ])
    //.limit(limitOfDays)
    .exec()
    .then(videos => {
      res.json(videos);
    })
    .catch(next);
}

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

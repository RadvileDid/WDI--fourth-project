const mongoose = require('mongoose');

const upvoteSchema = new mongoose.Schema({
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true
});

upvoteSchema.methods.belongsTo = function upvoteBelongsTo(user) {
  return this.createdBy.id === user.id;
};

const videoSchema = new mongoose.Schema({
  title: { type: String},
  danceStyle: { type: Array },
  videoId: { type: String },
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  upvotes: [ upvoteSchema ]
});

videoSchema.pre('save', function splitUrl(next){
  if(this.isModified('videoId')) {
    this.videoId = this.videoId.match(/[a-zA-Z0-9_-]{11}/);
  }
  next();
});

videoSchema.methods.belongsTo = function videoBelongsTo(user) {
  return this.createdBy.id === user._id;
};

module.exports = mongoose.model('Video', videoSchema);

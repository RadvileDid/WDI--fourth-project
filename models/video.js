const mongoose = require('mongoose');

const upvoteSchema = new mongoose.Schema({
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
});

upvoteSchema.methods.belongsTo = function upvoteBelongsTo(user) {
  return this.createdBy.id === user.id;
};

const videoSchema = new mongoose.Schema({
  title: { type: String},
  danceStyle: { type: Array },
  videoId: { type: String },
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  upvotes: [ {type: mongoose.Schema.ObjectId, ref: 'User', required: true} ],
  formattedDate: { type: String }
}, {
  timestamps: true
});

videoSchema.pre('save', setFormattedDate);

function setFormattedDate(next) {
  const date = new Date(this.createdAt);
  this.formattedDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
  next();
}

videoSchema.pre('save', function splitUrl(next){
  if(this.isModified('videoId')) {
    this.videoId = this.videoId.split('v=')[1].substring(0, 11);
  }
  next();
});

videoSchema.methods.belongsTo = function videoBelongsTo(user) {
  return this.createdBy.id === user._id;
};

module.exports = mongoose.model('Video', videoSchema);

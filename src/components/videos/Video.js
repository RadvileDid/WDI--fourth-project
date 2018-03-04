import React, { Component } from 'react';
// import React, { Component } from 'react';
import youtubeThumbnail from 'youtube-thumbnail';
import Auth from '../../lib/Auth';
// import Axios from 'axios';

export default class Video extends Component {
  handleUpvoteClick = (e) => {
    e.preventDefault();
    this.props.onUpvote(this.props.video._id);
  }

  render() {
    const { video, upvotes } = this.props;
    const thumbData = youtubeThumbnail(`http://youtube.com/watch?v=${video.videoId}`);
    return (
      <div key={video._id} className="videoBox">
        <div className="row">
          <div className="videoImageContainer">
            <img src={thumbData.high.url} />
          </div>
          <div className="singleVideoRightContainer">
            <p>{video.title}</p>
            <div className="danceStyle">
              {video.danceStyle}
            </div>
            <div>
              { Auth.isAuthenticated() &&
              <button onClick={this.handleUpvoteClick} className="voteButton button">
                Vote <i className="fas fa-arrow-up"></i>
              </button>}
              Total votes: {upvotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

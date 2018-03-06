import React, { Component } from 'react';
// import React, { Component } from 'react';
import youtubeThumbnail from 'youtube-thumbnail';
// import Auth from '../../lib/Auth';
// import Axios from 'axios';

export default class Video extends Component {
  handleUpvoteClick = (e) => {
    e.preventDefault();
    this.props.onUpvote(this.props.video._id);
  }

  render() {
    const { video, upvotes, index } = this.props;

    const thumbData = youtubeThumbnail(`http://youtube.com/watch?v=${video.videoId}`);
    return (

      <div key={video._id} className="videoBox">
        <div className="row imageCrop">
          <div className="index">#{index+ 1}</div>
          <div className="videoImageContainer"  style={{backgroundImage: `url(${thumbData.high.url})`}} />
          <div className="singleVideoRightContainer">
            <div>{video.title}</div>
            <div className="danceStyle">
              {video.danceStyle}
            </div>
          </div>
          <div className="upvotesContainer">
            <div className="upvotesRow">
              <div>
                <button onClick={this.handleUpvoteClick} className="voteIconButton">
                  <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4xNzEgNTEyLjE3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjE3MSA1MTIuMTcxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Ni43MjMsMjE2LjY0TDI2My4zMDUsMy4xMTVDMjYxLjI5OSwxLjEwOSwyNTguNTksMCwyNTUuNzUzLDBjLTIuODM3LDAtNS41NDcsMS4xMzEtNy41NTIsMy4xMzZMMzUuNDIyLDIxNi42NCAgICBjLTMuMDUxLDMuMDUxLTMuOTQ3LDcuNjM3LTIuMzA0LDExLjYyN2MxLjY2NCwzLjk4OSw1LjU0Nyw2LjU3MSw5Ljg1Niw2LjU3MWgxMTcuMzMzdjI2Ni42NjdjMCw1Ljg4OCw0Ljc3OSwxMC42NjcsMTAuNjY3LDEwLjY2NyAgICBoMTcwLjY2N2M1Ljg4OCwwLDEwLjY2Ny00Ljc3OSwxMC42NjctMTAuNjY3VjIzNC44MzdoMTE2Ljg4NWM0LjMwOSwwLDguMTkyLTIuNjAzLDkuODU2LTYuNTkyICAgIEM0ODAuNzEzLDIyNC4yNTYsNDc5Ljc3NCwyMTkuNjkxLDQ3Ni43MjMsMjE2LjY0eiIgZmlsbD0iI2U0NmI2NyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" className="icon" />
                </button>
                <div>{upvotes}</div>
              </div>
            </div>
            <div className="upvotes">upvote</div>
          </div>
        </div>
      </div>
    );
  }
}

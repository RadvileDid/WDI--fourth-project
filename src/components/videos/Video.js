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
            <div>{video.title}</div>
            <div className="danceStyle">
              {video.danceStyle}
            </div>
          </div>
          <div className="upvotesContainer">
            <div className="upvotesRow">
              <div>

                <button onClick={this.handleUpvoteClick} className="voteIconButton">
                  <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI4NC44MTUgMjg0LjgxNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg0LjgxNSAyODQuODE1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI1NS45LDIyOC4wOGMtNy43MjUsMC0xNC45ODctMy4wMTQtMjAuNDUtOC40NzFsLTkzLjA0OC05My4wNTRsLTkzLjA0MSw5My4wNDhjLTUuNDU2LDUuNDYzLTEyLjcxOSw4LjQ3MS0yMC40NSw4LjQ3MSAgICBzLTE0Ljk5NC0zLjAwOC0yMC40NTctOC40NzFjLTExLjI3My0xMS4yNzMtMTEuMjczLTI5LjYyMSwwLTQwLjg5NEwxMjEuOTUyLDY1LjIwNWM1LjQ1Ni01LjQ2MywxMi43MTktOC40NzEsMjAuNDQ0LTguNDcxICAgIGM3LjcxOSwwLDE0Ljk4NywzLjAwOCwyMC40NSw4LjQ3MWwxMTMuNDk4LDExMy41MDRjNS40NjksNS40NjMsOC40NzEsMTIuNzE5LDguNDcxLDIwLjQ1YzAsNy43MTktMy4wMDgsMTQuOTg3LTguNDcxLDIwLjQ1ICAgIEMyNzAuODg4LDIyNS4wNjYsMjYzLjYyNiwyMjguMDgsMjU1LjksMjI4LjA4eiBNMTQyLjQwMywxMDguMzgxbDEwMi4xMzUsMTAyLjE0MmM2LjA3Myw2LjA3MywxNi42NDUsNi4wNzMsMjIuNzE5LDAgICAgYzMuMDQtMy4wNCw0LjcwNC03LjA3Niw0LjcwNC0xMS4zNjNzLTEuNjcxLTguMzIzLTQuNzA0LTExLjM2M0wxNTMuNDcsNzQuMDE2Yy02LjA3My01Ljc5Ny0xNi40NTMtNS43MDEtMjIuNDIzLDAuMjc2ICAgIEwxNy41NDIsMTg3Ljc5N2MtNi4yNjYsNi4yNjYtNi4yNjYsMTYuNDU5LDAsMjIuNzE5YzYuMDczLDYuMDczLDE2LjY1OCw2LjA3MywyMi43MjUsMEwxNDIuNDAzLDEwOC4zODF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" className="icon"/>
                </button>
                <div>{upvotes}</div>
              </div>
            </div>
            <div className="test">upvote</div>
          </div>
        </div>
      </div>
    );
  }
}

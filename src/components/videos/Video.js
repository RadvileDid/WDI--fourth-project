import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import youtubeThumbnail from 'youtube-thumbnail';

export default class Video extends Component {
  handleUpvoteClick = () => {
    this.props.onUpvote(this.props.video._id);
  }

  render() {
    const { video, upvotes } = this.props;

    const thumbData = youtubeThumbnail(`http://youtube.com/watch?v=${video.videoId}`);
    return (
      <div key={video._id} className="singleComponentBox singleVideoComponentBox">
        <Link to={`/videos/${video._id}`}>
          <img src={thumbData.high.url} />
        </Link>
        <p>Title: <span>{video.title}</span></p>
        {video.danceStyle.map((styles, i) => {
          return (
            <div key={i} className="danceStyleTag">{styles}</div>
          );
        })}
        <div>Upvotes: <span>{upvotes}</span>

          <button onClick={this.handleUpvoteClick} className="button">
            UPVOTE
          </button>
        </div>
      </div>
    );
  }
}

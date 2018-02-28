import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import youtubeThumbnail from 'youtube-thumbnail';

export default class Video extends Component {
  constructor(props) {
    super(props);

    this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
  }

  handleUpvoteClick() {
    this.props.onUpvote(this.props.video._id);
  }

  render() {
    const { video } = this.props;

    const thumbData = youtubeThumbnail(`http://youtube.com/watch?v=${video.videoId}`);
    return (
      <div key={video._id} className="singleComponentBox singleVideoComponentBox">
        <Link to={`/videos/${video._id}`}>
          <img src={thumbData.high.url} />
        </Link>
        <p>
          {video.title}
        </p>
        <p>
          {video.createdAt}
        </p>
        {video.danceStyle.map((styles, i) => {
          return (
            <div key={i} className="danceStyleTag">{styles}</div>
          );
        })}
        <div>
          Upvotes:
          <span>
            {video.upvotes.length}
          </span>
          <button onClick={this.handleUpvoteClick}>
            UPVOTE
          </button>
        </div>
      </div>
    );
  }
}

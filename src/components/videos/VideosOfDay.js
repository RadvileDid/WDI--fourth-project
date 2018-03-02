import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import youtubeThumbnail from 'youtube-thumbnail';

export default class VideosOfDay extends Component {

  render() {
    const { videos } = this.props;
    console.log('inside videos',videos);

    return (
      <div className="singleComponentBox singleVideoComponentBox">
        <p>This is Videos of Day</p>
      </div>
    );
  }
}

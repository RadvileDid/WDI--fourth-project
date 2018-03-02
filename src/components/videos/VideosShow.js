import React, { Component } from 'react';
import classnames from 'classnames';
import Axios from 'axios';
import YouTube from 'react-youtube';

class VideosShow extends Component {
  state = {
    video: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/videos/${this.props.match.params.videoId}`)
      .then(res => this.setState({ video: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const opts = {
      width: '100%'
    };

    const rootClassName = classnames({
      'singleComponentBox': true,
      'singleVideoComponentBox': true,
      'singleVideoComponentBox--asOverlay': !!this.props.asOverlay
    });

    return(
      <div>
        <div className={rootClassName}>
          <YouTube
            videoId={this.state.video.videoId}
            opts={opts}
          />
        </div>
      </div>
    );
  }
}

export default VideosShow;

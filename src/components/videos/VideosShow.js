import React, { Component } from 'react';
import classnames from 'classnames';
import Axios from 'axios';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';

class VideosShow extends Component {
  state = {
    video: {}
  }

  componentDidMount() {
    this.fetchVideo(this.props.match.params.videoId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.videoId !== nextProps.match.params.videoId) {
      this.fetchVideo(nextProps.match.params.videoId);
    }
  }

  fetchVideo(videoId) {
    Axios
      .get(`/api/videos/${videoId}`)
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
      <div className="testas">
        <div className={rootClassName}>
          <YouTube
            videoId={this.state.video.videoId}
            opts={opts}
          />
        </div>
        <Link to="/" className="button close"><i className="fas fa-times"></i>
        </Link>
      </div>
    );
  }
}

export default VideosShow;

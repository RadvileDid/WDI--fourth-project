import React, { Component } from 'react';
import Axios from 'axios';
import YouTube from 'react-youtube';
// // import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';

class VideosShow extends Component {
  state = {
    video: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/videos/${this.props.match.params.id}`)
      .then(res => this.setState({ video: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  render() {

    const opts = {
      height: '390',
      width: '490'
    };


    return(
      <div>
        <div className="singleComponentBox singleVideoComponentBox">
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

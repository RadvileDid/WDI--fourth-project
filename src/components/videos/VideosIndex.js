import React, { Component } from 'react';
import Axios from 'axios';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import youtubeThumbnail from 'youtube-thumbnail';
import Auth from '../../lib/Auth';


// const thumbnail = youtubeThumbnail('{videos.videoURL}');
// console.log(thumbnail);

class VideosIndex extends Component {
  state = {
    videos: []
  }


  componentDidMount() {
    Axios
      .get('/api/videos')
      .then(res => this.setState({ videos: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  render() {

    const videoNodes = this.state.videos.map((video) => {
      const thumbData = youtubeThumbnail(`http://youtube.com/watch?v=${video.videoId}`);
      return (
        <div key={video._id} className="singleComponentBox singleVideoComponentBox">
          <Link to={`/videos/${video._id}`}>
            <img src={thumbData.high.url} />
          </Link>
          <p>
            {video.title}
          </p>
          <div>
            <p>
              Upvotes:
              <span>
                {video.upvotes.length}
              </span>
            </p>
            <button className="button">
              Upvote
            </button>
          </div>

        </div>
      );
    });

    return(
      <div>
        <div>
          <div>
            { Auth.isAuthenticated() &&  <button className="button">
              <Link to="/videos/new">
                <i className="fa fa-plus" aria-hidden="true"></i>Add video
              </Link>
            </button>}
          </div>
          <div>{videoNodes}</div>
        </div>
      </div>
    );
  }
}

export default VideosIndex;

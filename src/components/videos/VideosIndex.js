import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import youtubeThumbnail from 'youtube-thumbnail';
import Auth from '../../lib/Auth';

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

  upvoteVideo = () => {
    Axios
      .post('/api/videos')
      .then(() => this.props.history.push('/'))
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
          {video.danceStyle.map((styles, i) => {
            return (
              <div key={i} className="danceStyleTag">{styles}</div>
            );
          })}
          <div>
            <p>
              Upvotes:
              <span>
                {video.upvotes.length}
              </span>
            </p>
            {/* { Auth.isAuthenticated() && <form>
                <input type="hidden" name="_method" value="PUT">
                <input type="hidden" name="upvote" value={}>
                <button class="btn btn-success btn-sm">Count me in! <i class="fa fa-user-plus" aria-hidden="true"></i></button>
              </form>} */}
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

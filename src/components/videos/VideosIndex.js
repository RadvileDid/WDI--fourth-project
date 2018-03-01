import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Video from './Video';
import Auth from '../../lib/Auth';

class VideosIndex extends Component {
  state = {
    videos: []
  }

  componentDidMount() {
    Axios
      .get('/api/videos')
      .then(res => {
        const videos = res.data.reduce((obj, video) => {
          obj[video.formattedDate] = obj[video.formattedDate] ? obj[video.formattedDate].concat([video]) : [video];
          return obj;
        }, {});
        this.setState({ videos }, () => console.log(videos));
      })
      .catch(err => console.log(err));
  }

  handleUpvote = (videoId) => {
    Axios
      .post(`/api/videos/${videoId}/upvote`, {}, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then((res) => {
        this.setState(prevState => {
          const newState = prevState;
          newState.videos = newState.videos.map(video => video._id === videoId ? res.data : video);
          return newState;
        });
      });
  }

  render() {
    // const videoNodes = this.state.videos.map((video) => {
    //   return <Video video={video} key={video._id} onUpvote={this.handleUpvote} />;
    // });

    for (const i in this.state.videos) {
      console.log('here trying to loop over the array', this.state.videos[i]);
    }

    // for (var i in "1-2-2018") {
    //   return("1-2-2018"[i]);
    // }

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
          {/* <div>{videoNodes}</div> */}
        </div>
      </div>
    );
  }
}

export default VideosIndex;

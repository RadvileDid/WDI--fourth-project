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
      .then(res => this.setState({ videos: res.data }))
      .catch(err => console.log(err));
  }

  upvoteVideo = () => {
    Axios
      .post('/api/videos')
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  handleUpvote(videoId) {
    Axios.post(`/api/videos/${videoId}/upvote`, {}, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
    }).then(() => {
      console.log('upvoted');
    });
  }

  render() {
    const videoNodes = this.state.videos.map((video) => {
      return <Video video={video} key={video._id} onUpvote={this.handleUpvote} />;
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

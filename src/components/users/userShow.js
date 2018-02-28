import React from 'react';
import { Link, browserRouter } from 'react-router-dom';
import Axios from 'axios';
import BackButton from '../utility/BackButton';
import youtubeThumbnail from 'youtube-thumbnail';
import Auth from '../../lib/Auth';

class UserShow extends React.Component {
  state = {
    user: {
      name: '',
      username: '',
      profilePicture: ''
    },
    videos: []
  }

  componentDidMount() {
    Axios
      .get(`/api/user/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data.user, videos: res.data.videos }))
      .catch(err => console.log(err));
  }

  deleteVideo = (id, e) => {
    e.preventDefault();
    console.log(id);
    Axios
      .delete(`/api/videos/${id}`)
      .then(() => {
        this.setState(prevState => {
          const newState = prevState;
          newState.videos = newState.videos.filter(video => video._id !== id);
          return newState;
        }, () => console.log(this.state));
      })
      .catch(err => console.log(err));
  }


  render() {
    const videoNodes = this.state.videos.map((video) => {
      const thumbData = youtubeThumbnail(`http://youtube.com/watch?v=${video.videoId}`);
      return (
        <div key={video._id} className="singleComponentBox singleVideoComponentBox">
          <img src={thumbData.high.url} />
          <p className="smallFont">{video.title}</p>
          <form onSubmit={(e) => this.deleteVideo(video._id, e)}>
            <input type="hidden" name="_method" value="DELETE" />
            <button><i className="fa fa-trash" aria-hidden="true"></i></button>
          </form>
        </div>
      );
    });

    return (
      <div className="singleComponentBox">
        <p>This is profile page</p>
        <div>
          <img src={this.state.user.profilePicture} />
        </div>
        <div>
          <h3>Name: <span>{this.state.user.name}</span></h3>
          <h4>Username: <span>{this.state.user.username}</span></h4>
        </div>
        { Auth.isAuthenticated() && <Link to={`/user/${this.props.match.params.id}/edit`} className="button">Edit</Link>}
        <BackButton />
        <div className="myVidoes">
          {videoNodes}
        </div>
      </div>
    );
  }
}

export default UserShow;

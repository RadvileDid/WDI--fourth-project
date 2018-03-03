import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Video from './Video';
import Auth from '../../lib/Auth';
// import Logout from '../utility/Logout';

class VideosIndex extends Component {
  state = {
    videosGroups: []
  }

  constructor(props) {
    super(props);
    this.renderVideoListItem = this.renderVideoListItem.bind(this);
  }

  componentDidMount() {
    Axios
      .get('/api/videos')
      .then(res => this.setState({ videosGroups: res.data}))
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

  renderVideoListItem(videoData) {
    return (
      <Link
        to={{
          pathname: `/videos/${videoData._id}`,
          state: {
            showVideoOverlay: true,
            from: 'VideosIndex'
          }
        }} key={videoData._id}
      >
        <Video
          video={videoData.video}
          upvotes={videoData.totalVotes}
          key={videoData._id}
          onUpvote={this.handleUpvote}
        />
      </Link>
    );
  }

  render() {
    const videoNodes = this.state.videosGroups.map((dayGroupData) => {

      return(
        <div key={dayGroupData._id.yymmdd} className="singleComponentBox">
          <p>Top videos from: {dayGroupData._id.yymmdd}</p>
          { dayGroupData && dayGroupData.videos.map(this.renderVideoListItem)}
        </div>
      );
    });

    return(
      <div>
        <div className="row">
          <div className="left">
            {/* <Logout /> */}
            <div className="aboutText">
              <h2>Discover the next big start in the street dance</h2>
              <div className="slogan">help the best talent to be noticed worldwide</div>
              <div className="info">Upload your own videos and upvote the videos you like - spread the love for dance</div>
            </div>
            <div className="auth">
              <div className="test">
                { !Auth.isAuthenticated() && <Link to="/login" className="button">Login</Link> }
                { !Auth.isAuthenticated() && <Link to="/register" className="button">Register</Link>}
                { Auth.isAuthenticated() &&  <button className="button">
                  <Link to="/new">
                    <i className="fa fa-plus" aria-hidden="true"></i>Add video
                  </Link>
                </button>}
                { Auth.isAuthenticated() && <Link to={`/user/${Auth.getPayload().userId}`} className="button">Profile</Link>}
              </div>
            </div>
          </div>
          <div className="rigth">{videoNodes}</div>
        </div>
      </div>
    );
  }
}

export default VideosIndex;

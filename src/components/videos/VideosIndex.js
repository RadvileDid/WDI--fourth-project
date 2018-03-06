import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Video from './Video';
import Auth from '../../lib/Auth';
import Logout     from '../utility/Logout';

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
    // console.log('videoId', videoId);
    // console.log('videosGroups', this.state.videosGroups);



    Axios
      .post(`/api/videos/${videoId}/upvote`, {}, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => {

        const videosGroups = this.state.videosGroups.map(group => {
          group.videos.map(video => {
            if(video._id === videoId) {
              video.totalVotes = res.data.upvotes.length;
              return video;
            }
            return video;
          });
          return group;
        });

        this.setState({ videosGroups });
      })
      .catch(err => console.log(err));
  }

  renderVideoListItem(videoData, index) {
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
          index={index}
        />
      </Link>
    );
  }

  render() {
    const videoNodes = this.state.videosGroups.map((dayGroupData) => {

      const day = moment(dayGroupData._id.yymmdd).calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
      });

      return(
        <div key={dayGroupData._id.yymmdd} className="allVideos">
          <h1>
            {day}
          </h1>
          <div className="border"></div>
          <div>
            { dayGroupData && dayGroupData.videos.map(this.renderVideoListItem)}
          </div>
        </div>
      );
    });

    return(
      <div>
        <div className="row">
          <div className="left">
            <div className="decorationTop"></div>
            <div className="aboutText">
              <div className="logo"></div>
              <h2>Discover the next big start in the street dance</h2>
              <div className="slogan">help the best talent to be noticed
                worldwide</div>
              <div className="profileBorder"></div>
              <div className="info">
                Upload your own videos and upvote the videos
                you like - spread the love for dance
              </div>
            </div>
            <div className="auth">
              <div className="buttons">
                { !Auth.isAuthenticated() &&
                   <Link to="/login" className="button homePageButtons login">login</Link> }
                { !Auth.isAuthenticated() &&
                   <Link to="/register" className="button homePageButtons register">sign up</Link>}
                <div className="bottomText">
                  <div className="addVideoText">Have a video to share?</div>
                  <Link to="/new" className="addVideo button">Submit video</Link>
                  <div className="loggedInButtons">
                    { Auth.isAuthenticated() &&
                       <Link to={`/user/${Auth.getPayload().userId}`}
                         className="profile">Profile</Link>}
                    <Logout />
                  </div>
                </div>
              </div>
            </div>
            <div className="decorationBottom"></div>
          </div>
          <div className="right">{videoNodes}</div>
        </div>
      </div>
    );
  }
}

export default VideosIndex;

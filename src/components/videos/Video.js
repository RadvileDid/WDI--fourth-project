import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import youtubeThumbnail from 'youtube-thumbnail';
import Auth from '../../lib/Auth';
// import Axios from 'axios';

export default class Video extends Component {
  handleUpvoteClick = () => {
    this.props.onUpvote(this.props.video._id);
    // this.refs.btn.setAttribute('disabled', disabled);
  }

  // state = {
  //   user: {
  //     name: '',
  //     profilePicture: ''
  //   }
  // }
  //
  // componentDidMount() {
  //   Axios
  //     .get(`/api/user/${video.createdBy}`)
  //     .then(res => this.setState({ user: res.data.user }, console.log(res.data.user)))
  //     .catch(err => console.log(err));
  // }

  render() {
    const { video, upvotes } = this.props;

    const thumbData = youtubeThumbnail(`http://youtube.com/watch?v=${video.videoId}`);
    return (
      <div key={video._id} className="videoBox">
        <div className="row">
          <div className="videoImageContainer">
            <Link to={`/videos/${video._id}`}>
              <img src={thumbData.high.url} />
            </Link>
          </div>
          <div className="testContainer">
            <p>{video.title}</p>
            {/* <p>Created by: <span>{video.createdBy.image}</span></p> */}
            <div className="danceStyleTagContainer">
              {video.danceStyle.map((styles, i) => {
                return (
                  <div key={i} className="danceStyleTag">{styles}</div>
                );
              })}
            </div>
            <div>
              { Auth.isAuthenticated() &&
              <button onClick={this.handleUpvoteClick} className="voteButton button">
                <i className="fas fa-arrow-up"></i>
              </button>}
              Total votes: {upvotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

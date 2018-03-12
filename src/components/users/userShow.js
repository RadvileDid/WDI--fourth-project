import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import youtubeThumbnail from 'youtube-thumbnail';

import Auth       from '../../lib/Auth';
import BackButton from '../utility/BackButton';

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
      .delete(`/api/videos/${id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
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
        <div key={video._id} className="singleVideoComponentBox videoBox">
          <div className="row rowProfileVideos">
            <div className="rowProfile">
              <div className="videoImageContainer"  style={{backgroundImage: `url(${thumbData.high.url})`}} />
              <div className="singleVideoRightContainer">
                <div className="profileTitle">{video.title}</div>
                <div className="danceStyle">{video.danceStyle}</div>
              </div>
              <form onSubmit={(e) => this.deleteVideo(video._id, e)}>
                <input type="hidden" name="_method" value="DELETE" />
                <button className="button delete"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDc3NC4yNjYgNzc0LjI2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzc0LjI2NiA3NzQuMjY2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTY0MC4zNSw5MS4xNjlINTM2Ljk3MVYyMy45OTFDNTM2Ljk3MSwxMC40NjksNTI2LjA2NCwwLDUxMi41NDMsMGMtMS4zMTIsMC0yLjE4NywwLjQzOC0yLjYxNCwwLjg3NSAgICBDNTA5LjQ5MSwwLjQzOCw1MDguNjE2LDAsNTA4LjE3OSwwSDI2NS4yMTJoLTEuNzRoLTEuNzVjLTEzLjUyMSwwLTIzLjk5LDEwLjQ2OS0yMy45OSwyMy45OTF2NjcuMTc5SDEzMy45MTYgICAgYy0yOS42NjcsMC01Mi43ODMsMjMuMTE2LTUyLjc4Myw1Mi43ODN2MzguMzg3djQ3Ljk4MWg0NS44MDN2NDkxLjZjMCwyOS42NjgsMjIuNjc5LDUyLjM0Niw1Mi4zNDYsNTIuMzQ2aDQxNS43MDMgICAgYzI5LjY2NywwLDUyLjc4Mi0yMi42NzgsNTIuNzgyLTUyLjM0NnYtNDkxLjZoNDUuMzY2di00Ny45ODF2LTM4LjM4N0M2OTMuMTMzLDExNC4yODYsNjcwLjAwOCw5MS4xNjksNjQwLjM1LDkxLjE2OXogICAgIE0yODUuNzEzLDQ3Ljk4MWgyMDIuODR2NDMuMTg4aC0yMDIuODRWNDcuOTgxeiBNNTk5LjM0OSw3MjEuOTIyYzAsMy4wNjEtMS4zMTIsNC4zNjMtNC4zNjQsNC4zNjNIMTc5LjI4MiAgICBjLTMuMDUyLDAtNC4zNjQtMS4zMDMtNC4zNjQtNC4zNjNWMjMwLjMyaDQyNC40MzFWNzIxLjkyMnogTTY0NC43MTUsMTgyLjMzOUgxMjkuNTUxdi0zOC4zODdjMC0zLjA1MywxLjMxMi00LjgwMiw0LjM2NC00LjgwMiAgICBINjQwLjM1YzMuMDUzLDAsNC4zNjUsMS43NDksNC4zNjUsNC44MDJWMTgyLjMzOXoiIGZpbGw9IiNiMzM1MmUiLz4KCQk8cmVjdCB4PSI0NzUuMDMxIiB5PSIyODYuNTkzIiB3aWR0aD0iNDguNDE4IiBoZWlnaHQ9IjM5Ni45NDIiIGZpbGw9IiNiMzM1MmUiLz4KCQk8cmVjdCB4PSIzNjMuMzYxIiB5PSIyODYuNTkzIiB3aWR0aD0iNDguNDE4IiBoZWlnaHQ9IjM5Ni45NDIiIGZpbGw9IiNiMzM1MmUiLz4KCQk8cmVjdCB4PSIyNTEuNjkiIHk9IjI4Ni41OTMiIHdpZHRoPSI0OC40MTgiIGhlaWdodD0iMzk2Ljk0MiIgZmlsbD0iI2IzMzUyZSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" className="icon"/></button>
              </form>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="singleComponentBox">
        <div className="row">
          <div className="leftProfile left">
            <div className="profileBack profileBackButton"><BackButton /></div>
            <div className="decorationTop"></div>
            <div className="logoProfile"></div>
            <div className="userData">
              <div style={{backgroundImage: `url(${this.state.user.profilePicture})`}}  className="profileImage"></div>
              <div className="userText">
                <h2>{this.state.user.name}</h2>
                <h4>{this.state.user.username}</h4>
                <h4>{this.state.user.email}</h4>
              </div>
            </div>
            <div className="profileButtons">

              { Auth.isAuthenticated() && <Link to={`/user/${this.props.match.params.id}/edit`} className="button edit"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU1LjI1IDU1LjI1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NS4yNSA1NS4yNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8cGF0aCBkPSJNNTIuNjE4LDIuNjMxYy0zLjUxLTMuNTA4LTkuMjE5LTMuNTA4LTEyLjcyOSwwTDMuODI3LDM4LjY5M0MzLjgxLDM4LjcxLDMuOCwzOC43MzEsMy43ODUsMzguNzQ5ICBjLTAuMDIxLDAuMDI0LTAuMDM5LDAuMDUtMC4wNTgsMC4wNzZjLTAuMDUzLDAuMDc0LTAuMDk0LDAuMTUzLTAuMTI1LDAuMjM5Yy0wLjAwOSwwLjAyNi0wLjAyMiwwLjA0OS0wLjAyOSwwLjA3NSAgYy0wLjAwMywwLjAxLTAuMDA5LDAuMDItMC4wMTIsMC4wM2wtMy41MzUsMTQuODVjLTAuMDE2LDAuMDY3LTAuMDIsMC4xMzUtMC4wMjIsMC4yMDJDMC4wMDQsNTQuMjM0LDAsNTQuMjQ2LDAsNTQuMjU5ICBjMC4wMDEsMC4xMTQsMC4wMjYsMC4yMjUsMC4wNjUsMC4zMzJjMC4wMDksMC4wMjUsMC4wMTksMC4wNDcsMC4wMywwLjA3MWMwLjA0OSwwLjEwNywwLjExLDAuMjEsMC4xOTYsMC4yOTYgIGMwLjA5NSwwLjA5NSwwLjIwNywwLjE2OCwwLjMyOCwwLjIxOGMwLjEyMSwwLjA1LDAuMjUsMC4wNzUsMC4zNzksMC4wNzVjMC4wNzcsMCwwLjE1NS0wLjAwOSwwLjIzMS0wLjAyN2wxNC44NS0zLjUzNSAgYzAuMDI3LTAuMDA2LDAuMDUxLTAuMDIxLDAuMDc3LTAuMDNjMC4wMzQtMC4wMTEsMC4wNjYtMC4wMjQsMC4wOTktMC4wMzljMC4wNzItMC4wMzMsMC4xMzktMC4wNzQsMC4yMDEtMC4xMjMgIGMwLjAyNC0wLjAxOSwwLjA0OS0wLjAzMywwLjA3Mi0wLjA1NGMwLjAwOC0wLjAwOCwwLjAxOC0wLjAxMiwwLjAyNi0wLjAybDM2LjA2My0zNi4wNjNDNTYuMTI3LDExLjg1LDU2LjEyNyw2LjE0LDUyLjYxOCwyLjYzMXogICBNNTEuMjA0LDQuMDQ1YzIuNDg4LDIuNDg5LDIuNyw2LjM5NywwLjY1LDkuMTM3bC05Ljc4Ny05Ljc4N0M0NC44MDgsMS4zNDUsNDguNzE2LDEuNTU3LDUxLjIwNCw0LjA0NXogTTQ2LjI1NCwxOC44OTVsLTkuOS05LjkgIGwxLjQxNC0xLjQxNGw5LjksOS45TDQ2LjI1NCwxOC44OTV6IE00Ljk2MSw1MC4yODhjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBMMi43OSw1MS4wNDVsMi41NTQtMTAuNzI4bDQuNDIyLTAuNDkxICBsLTAuNTY5LDUuMTIyYy0wLjAwNCwwLjAzOCwwLjAxLDAuMDczLDAuMDEsMC4xMWMwLDAuMDM4LTAuMDE0LDAuMDcyLTAuMDEsMC4xMWMwLjAwNCwwLjAzMywwLjAyMSwwLjA2LDAuMDI4LDAuMDkyICBjMC4wMTIsMC4wNTgsMC4wMjksMC4xMTEsMC4wNSwwLjE2NWMwLjAyNiwwLjA2NSwwLjA1NywwLjEyNCwwLjA5NSwwLjE4MWMwLjAzMSwwLjA0NiwwLjA2MiwwLjA4NywwLjEsMC4xMjcgIGMwLjA0OCwwLjA1MSwwLjEsMC4wOTQsMC4xNTcsMC4xMzRjMC4wNDUsMC4wMzEsMC4wODgsMC4wNiwwLjEzOCwwLjA4NEM5LjgzMSw0NS45ODIsOS45LDQ2LDkuOTcyLDQ2LjAxNyAgYzAuMDM4LDAuMDA5LDAuMDY5LDAuMDMsMC4xMDgsMC4wMzVjMC4wMzYsMC4wMDQsMC4wNzIsMC4wMDYsMC4xMDksMC4wMDZjMCwwLDAuMDAxLDAsMC4wMDEsMGMwLDAsMC4wMDEsMCwwLjAwMSwwaDAuMDAxICBjMCwwLDAuMDAxLDAsMC4wMDEsMGMwLjAzNiwwLDAuMDczLTAuMDAyLDAuMTA5LTAuMDA2bDUuMTIyLTAuNTY5bC0wLjQ5MSw0LjQyMkw0LjIwNCw1Mi40NTlsMC43NTctMC43NTcgIEM1LjM1MSw1MS4zMTIsNS4zNTEsNTAuNjc5LDQuOTYxLDUwLjI4OHogTTE3LjUxMSw0NC44MDlMMzkuODg5LDIyLjQzYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRzLTEuMDIzLTAuMzkxLTEuNDE0LDAgIEwxNi4wOTcsNDMuMzk1bC00Ljc3MywwLjUzbDAuNTMtNC43NzNsMjIuMzgtMjIuMzc4YzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRzLTEuMDIzLTAuMzkxLTEuNDE0LDBMMTAuNDQsMzcuNzM4ICBsLTMuMTgzLDAuMzU0TDM0Ljk0LDEwLjQwOWw5LjksOS45TDE3LjE1Nyw0Ny45OTJMMTcuNTExLDQ0LjgwOXogTTQ5LjA4MiwxNi4wNjdsLTkuOS05LjlsMS40MTUtMS40MTVsOS45LDkuOUw0OS4wODIsMTYuMDY3eiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" className="icon" /></Link>}
            </div>
            <div className="decorationBottom"></div>
          </div>
          <div className="rightProfile right">
            <div className="myVidoes">
              <h1>My videos:</h1>
              {videoNodes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;

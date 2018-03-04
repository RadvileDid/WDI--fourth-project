import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import youtubeThumbnail from 'youtube-thumbnail';

import Auth       from '../../lib/Auth';
import Logout     from '../utility/Logout';
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
        <div key={video._id} className="singleComponentBox singleVideoComponentBox videoBox">
          <div className="row">
            <div className="videoImageContainer">
              <img src={thumbData.high.url} />
            </div>
            <div className="rowProfile">
              <div className="profileTitle">{video.title}</div>
              <div className="danceStyle">{video.danceStyle}</div>
              <form onSubmit={(e) => this.deleteVideo(video._id, e)}>
                <input type="hidden" name="_method" value="DELETE" />
                <button className="button"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ4Mi40MjggNDgyLjQyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDgyLjQyOCA0ODIuNDI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4MS4xNjMsNTcuNzk5aC03NS4wOTRDMzAyLjMyMywyNS4zMTYsMjc0LjY4NiwwLDI0MS4yMTQsMGMtMzMuNDcxLDAtNjEuMTA0LDI1LjMxNS02NC44NSw1Ny43OTloLTc1LjA5OCAgICBjLTMwLjM5LDAtNTUuMTExLDI0LjcyOC01NS4xMTEsNTUuMTE3djIuODI4YzAsMjMuMjIzLDE0LjQ2LDQzLjEsMzQuODMsNTEuMTk5djI2MC4zNjljMCwzMC4zOSwyNC43MjQsNTUuMTE3LDU1LjExMiw1NS4xMTcgICAgaDIxMC4yMzZjMzAuMzg5LDAsNTUuMTExLTI0LjcyOSw1NS4xMTEtNTUuMTE3VjE2Ni45NDRjMjAuMzY5LTguMSwzNC44My0yNy45NzcsMzQuODMtNTEuMTk5di0yLjgyOCAgICBDNDM2LjI3NCw4Mi41MjcsNDExLjU1MSw1Ny43OTksMzgxLjE2Myw1Ny43OTl6IE0yNDEuMjE0LDI2LjEzOWMxOS4wMzcsMCwzNC45MjcsMTMuNjQ1LDM4LjQ0MywzMS42NmgtNzYuODc5ICAgIEMyMDYuMjkzLDM5Ljc4MywyMjIuMTg0LDI2LjEzOSwyNDEuMjE0LDI2LjEzOXogTTM3NS4zMDUsNDI3LjMxMmMwLDE1Ljk3OC0xMywyOC45NzktMjguOTczLDI4Ljk3OUgxMzYuMDk2ICAgIGMtMTUuOTczLDAtMjguOTczLTEzLjAwMi0yOC45NzMtMjguOTc5VjE3MC44NjFoMjY4LjE4MlY0MjcuMzEyeiBNNDEwLjEzNSwxMTUuNzQ0YzAsMTUuOTc4LTEzLDI4Ljk3OS0yOC45NzMsMjguOTc5SDEwMS4yNjYgICAgYy0xNS45NzMsMC0yOC45NzMtMTMuMDAxLTI4Ljk3My0yOC45Nzl2LTIuODI4YzAtMTUuOTc4LDEzLTI4Ljk3OSwyOC45NzMtMjguOTc5aDI3OS44OTdjMTUuOTczLDAsMjguOTczLDEzLjAwMSwyOC45NzMsMjguOTc5ICAgIFYxMTUuNzQ0eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0xNzEuMTQ0LDQyMi44NjNjNy4yMTgsMCwxMy4wNjktNS44NTMsMTMuMDY5LTEzLjA2OFYyNjIuNjQxYzAtNy4yMTYtNS44NTItMTMuMDctMTMuMDY5LTEzLjA3ICAgIGMtNy4yMTcsMC0xMy4wNjksNS44NTQtMTMuMDY5LDEzLjA3djE0Ny4xNTRDMTU4LjA3NCw0MTcuMDEyLDE2My45MjYsNDIyLjg2MywxNzEuMTQ0LDQyMi44NjN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTI0MS4yMTQsNDIyLjg2M2M3LjIxOCwwLDEzLjA3LTUuODUzLDEzLjA3LTEzLjA2OFYyNjIuNjQxYzAtNy4yMTYtNS44NTQtMTMuMDctMTMuMDctMTMuMDcgICAgYy03LjIxNywwLTEzLjA2OSw1Ljg1NC0xMy4wNjksMTMuMDd2MTQ3LjE1NEMyMjguMTQ1LDQxNy4wMTIsMjMzLjk5Niw0MjIuODYzLDI0MS4yMTQsNDIyLjg2M3oiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMzExLjI4NCw0MjIuODYzYzcuMjE3LDAsMTMuMDY4LTUuODUzLDEzLjA2OC0xMy4wNjhWMjYyLjY0MWMwLTcuMjE2LTUuODUyLTEzLjA3LTEzLjA2OC0xMy4wNyAgICBjLTcuMjE5LDAtMTMuMDcsNS44NTQtMTMuMDcsMTMuMDd2MTQ3LjE1NEMyOTguMjEzLDQxNy4wMTIsMzA0LjA2Nyw0MjIuODYzLDMxMS4yODQsNDIyLjg2M3oiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"  className="icon"/></button>
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
            <div>
              <img src={this.state.user.profilePicture} />
            </div>
            <div>
              <h3>Name: <span>{this.state.user.name}</span></h3>
              <h4>Username: <span>{this.state.user.username}</span></h4>
              <h4>Email: <span>{this.state.user.email}</span></h4>
            </div>
            <div className="profileButtons">
              <BackButton />
              { Auth.isAuthenticated() && <Link to={`/user/${this.props.match.params.id}/edit`} className="button"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU1LjI1IDU1LjI1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NS4yNSA1NS4yNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8cGF0aCBkPSJNNTIuNjE4LDIuNjMxYy0zLjUxLTMuNTA4LTkuMjE5LTMuNTA4LTEyLjcyOSwwTDMuODI3LDM4LjY5M0MzLjgxLDM4LjcxLDMuOCwzOC43MzEsMy43ODUsMzguNzQ5ICBjLTAuMDIxLDAuMDI0LTAuMDM5LDAuMDUtMC4wNTgsMC4wNzZjLTAuMDUzLDAuMDc0LTAuMDk0LDAuMTUzLTAuMTI1LDAuMjM5Yy0wLjAwOSwwLjAyNi0wLjAyMiwwLjA0OS0wLjAyOSwwLjA3NSAgYy0wLjAwMywwLjAxLTAuMDA5LDAuMDItMC4wMTIsMC4wM2wtMy41MzUsMTQuODVjLTAuMDE2LDAuMDY3LTAuMDIsMC4xMzUtMC4wMjIsMC4yMDJDMC4wMDQsNTQuMjM0LDAsNTQuMjQ2LDAsNTQuMjU5ICBjMC4wMDEsMC4xMTQsMC4wMjYsMC4yMjUsMC4wNjUsMC4zMzJjMC4wMDksMC4wMjUsMC4wMTksMC4wNDcsMC4wMywwLjA3MWMwLjA0OSwwLjEwNywwLjExLDAuMjEsMC4xOTYsMC4yOTYgIGMwLjA5NSwwLjA5NSwwLjIwNywwLjE2OCwwLjMyOCwwLjIxOGMwLjEyMSwwLjA1LDAuMjUsMC4wNzUsMC4zNzksMC4wNzVjMC4wNzcsMCwwLjE1NS0wLjAwOSwwLjIzMS0wLjAyN2wxNC44NS0zLjUzNSAgYzAuMDI3LTAuMDA2LDAuMDUxLTAuMDIxLDAuMDc3LTAuMDNjMC4wMzQtMC4wMTEsMC4wNjYtMC4wMjQsMC4wOTktMC4wMzljMC4wNzItMC4wMzMsMC4xMzktMC4wNzQsMC4yMDEtMC4xMjMgIGMwLjAyNC0wLjAxOSwwLjA0OS0wLjAzMywwLjA3Mi0wLjA1NGMwLjAwOC0wLjAwOCwwLjAxOC0wLjAxMiwwLjAyNi0wLjAybDM2LjA2My0zNi4wNjNDNTYuMTI3LDExLjg1LDU2LjEyNyw2LjE0LDUyLjYxOCwyLjYzMXogICBNNTEuMjA0LDQuMDQ1YzIuNDg4LDIuNDg5LDIuNyw2LjM5NywwLjY1LDkuMTM3bC05Ljc4Ny05Ljc4N0M0NC44MDgsMS4zNDUsNDguNzE2LDEuNTU3LDUxLjIwNCw0LjA0NXogTTQ2LjI1NCwxOC44OTVsLTkuOS05LjkgIGwxLjQxNC0xLjQxNGw5LjksOS45TDQ2LjI1NCwxOC44OTV6IE00Ljk2MSw1MC4yODhjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBMMi43OSw1MS4wNDVsMi41NTQtMTAuNzI4bDQuNDIyLTAuNDkxICBsLTAuNTY5LDUuMTIyYy0wLjAwNCwwLjAzOCwwLjAxLDAuMDczLDAuMDEsMC4xMWMwLDAuMDM4LTAuMDE0LDAuMDcyLTAuMDEsMC4xMWMwLjAwNCwwLjAzMywwLjAyMSwwLjA2LDAuMDI4LDAuMDkyICBjMC4wMTIsMC4wNTgsMC4wMjksMC4xMTEsMC4wNSwwLjE2NWMwLjAyNiwwLjA2NSwwLjA1NywwLjEyNCwwLjA5NSwwLjE4MWMwLjAzMSwwLjA0NiwwLjA2MiwwLjA4NywwLjEsMC4xMjcgIGMwLjA0OCwwLjA1MSwwLjEsMC4wOTQsMC4xNTcsMC4xMzRjMC4wNDUsMC4wMzEsMC4wODgsMC4wNiwwLjEzOCwwLjA4NEM5LjgzMSw0NS45ODIsOS45LDQ2LDkuOTcyLDQ2LjAxNyAgYzAuMDM4LDAuMDA5LDAuMDY5LDAuMDMsMC4xMDgsMC4wMzVjMC4wMzYsMC4wMDQsMC4wNzIsMC4wMDYsMC4xMDksMC4wMDZjMCwwLDAuMDAxLDAsMC4wMDEsMGMwLDAsMC4wMDEsMCwwLjAwMSwwaDAuMDAxICBjMCwwLDAuMDAxLDAsMC4wMDEsMGMwLjAzNiwwLDAuMDczLTAuMDAyLDAuMTA5LTAuMDA2bDUuMTIyLTAuNTY5bC0wLjQ5MSw0LjQyMkw0LjIwNCw1Mi40NTlsMC43NTctMC43NTcgIEM1LjM1MSw1MS4zMTIsNS4zNTEsNTAuNjc5LDQuOTYxLDUwLjI4OHogTTE3LjUxMSw0NC44MDlMMzkuODg5LDIyLjQzYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRzLTEuMDIzLTAuMzkxLTEuNDE0LDAgIEwxNi4wOTcsNDMuMzk1bC00Ljc3MywwLjUzbDAuNTMtNC43NzNsMjIuMzgtMjIuMzc4YzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRzLTEuMDIzLTAuMzkxLTEuNDE0LDBMMTAuNDQsMzcuNzM4ICBsLTMuMTgzLDAuMzU0TDM0Ljk0LDEwLjQwOWw5LjksOS45TDE3LjE1Nyw0Ny45OTJMMTcuNTExLDQ0LjgwOXogTTQ5LjA4MiwxNi4wNjdsLTkuOS05LjlsMS40MTUtMS40MTVsOS45LDkuOUw0OS4wODIsMTYuMDY3eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" className="icon"/></Link>}
              <Logout />
            </div>
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

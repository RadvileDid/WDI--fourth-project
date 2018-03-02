import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Video from './Video';
// import VideosOfDay from './Video';
import Auth from '../../lib/Auth';

class VideosIndex extends Component {
  state = {
    videosGroups: []
  }

  componentDidMount() {
    Axios
      .get('/api/videos')
      // .then(res => {
      //   const videos = res.data.reduce((obj, video) => {
      //     obj[video.formattedDate] = obj[video.formattedDate] ? obj[video.formattedDate].concat([video]) : [video];
      //     return obj;
      //   }, {});
      //   this.setState({ videos }, () => console.log(videos));
      // })
      .then(res => this.setState({ videosGroups: res.data}, () => console.log('inside of the componentDidMount, should be seeing a list for different days groups->', this.state.videosGroups, 'should be able to see the video list of a signle day here:', this.state.videosGroups[0].videos)))
      .catch(err => console.log(err));
  }

  //, res.data._id, 'and this is my videos object->', res.data.videos
  //{ videosGroups: res.data },
  //res.data[0].videos[0].video, 'and', res.data
  // this.state.videosGroups.map((video) => {
  //   return <Video video={video} key={video._id} onUpvote={this.handleUpvote} />;
  // });


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
    const videoNodes = this.state.videosGroups.map((dayGroupData) => {
      console.log('This is a single Day group ->', 'this is my date->', dayGroupData._id.yymmdd, 'and these are my videos', dayGroupData.videos, 'and this is my first video title', dayGroupData.videos[0].video.title);
      // return <VideosOfDay day={dayGroupData._id} key={dayGroupData._id} videos={dayGroupData.videos} onUpvote={this.handleUpvote} />;
      return(
        <div key={dayGroupData._id.yymmdd} className="singleComponentBox">
          <p>Top videos from: {dayGroupData._id.yymmdd}</p>
          {/* <p>This is my test video title:{ dayGroupData.videos[0].video.title}</p> */}
          { dayGroupData && dayGroupData.videos.map((videosData) => {
            console.log('checking videos here', videosData);
            // return <div key={videosData._id}>
            //   <div>{videosData.video.title}</div>
            //   <div>{videosData.totalVotes}</div>
            // </div>;
            return <Video video={videosData.video} upvotes={videosData.totalVotes} key={videosData._id} onUpvote={this.handleUpvote} />;
          })}

        </div>
      );
    });



    // for (const i in this.state.videos) {
    //   console.log('here trying to loop over the array of different days:', this.state.videos[i]);
    //
    // }

    // this.state.videosGroups.map((element) => {
    //   console.log('this is my group ->', element.videos);
    // this.state.videosGroups.videos.forEach((element) => {
    //   console.log('this is my video element', element);
    // });
    // });

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

import React from 'react';
import { Link, browserRouter } from 'react-router-dom';
import Axios from 'axios';
import BackButton from '../utility/BackButton';

import Auth from '../../lib/Auth';

class UserShow extends React.Component {
  state = {
    user: {
      name: '',
      username: '',
      profilePicture: ''
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/user/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }


  render() {
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
      </div>
    );
  }
}

export default UserShow;

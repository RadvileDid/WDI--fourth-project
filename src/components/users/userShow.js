import React from 'react';
import { Link, browserRouter } from 'react-router-dom';
import Axios from 'axios';

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
    // const { match: { params } } = this.props;
    console.log(`${this.props.match.params.id}`);

    Axios
      .get(`/api/user/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <p>This is profile page</p>
        <div>
          <img src={this.state.user.profilePicture} />
        </div>
        <div>
          <h3>{this.state.user.name}</h3>
          <h4>{this.state.user.username}</h4>
        </div>
        { Auth.isAuthenticated() && <Link to={`/user/${this.props.match.params.id}/edit`}>Edit</Link>}
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default UserShow;

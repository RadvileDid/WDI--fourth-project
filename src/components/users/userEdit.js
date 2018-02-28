import React from 'react';
import Axios from 'axios';

import EditForm from './editForm';
import Auth from '../../lib/Auth';

import BackButton from '../utility/BackButton';


class UserEdit extends React.Component {
  state = {
    user: {
      name: '',
      username: '',
      email: '',
      profilePicture: ''
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/user/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/user/${this.props.match.params.id}`, this.state.user, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(this.props.history.push(`/user/${this.props.match.params.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <EditForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default UserEdit;

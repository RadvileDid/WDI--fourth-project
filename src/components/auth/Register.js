import React from 'react';
import Axios from 'axios';

import RegisterForm from './RegisterForm';
// import Auth from '../../lib/Auth';

import BackButton from '../utility/BackButton';

class Register extends React.Component {

  state = {
    user: {
      name: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      profilePicture: ''
    },
    errors: {}
  }

  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('/api/register', this.state.user)
      .then(() => {
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <RegisterForm
          user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default Register;

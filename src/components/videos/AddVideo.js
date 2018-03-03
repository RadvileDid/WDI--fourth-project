import React, { Component } from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import AddVideoForm from './AddVideoForm';

class VideosNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {
        title: '',
        videoId: '',
        danceStyle: ''
      },
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value }}) {
    const video = Object.assign({}, this.state.video, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: ''});
    this.setState({ video, errors }, () => console.log(this.state));
  }

  handleSubmit(e) {
    e.preventDefault();

    Axios
      .post('/api/videos/new', this.state.video, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState(prevState => {
        const newState = prevState;
        newState.errors = err.response.data.errors;
        return newState;
      }));
  }

  render() {
    return(
      <AddVideoForm
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit }
        video={ this.state.video }
        errors={this.state.errors}
      />
    );
  }
}

export default VideosNew;

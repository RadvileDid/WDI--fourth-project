import React, { Component } from 'react';
import Axios from 'axios';

import AddVideoForm from './AddVideoForm';

class VideosNew extends Component {
    state = {
      video: {
        title: '',
        videoId: ''
      },
      errors: {}
    }

  handleChange = ({ target: { name, value }}) => {
    const video = Object.assign({}, this.state.video, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: ''});
    this.setState({ video, errors });
  }

  handleSubmit = e => {
    e.preventDefault();

    Axios
      .post('/api/videos', this.state.video)
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({errors: err.response.data.errors}));
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

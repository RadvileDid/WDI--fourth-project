import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import UserShow from './components/users/userShow';
import UserEdit from './components/users/userEdit';
import ProtectedRoute from './components/utility/ProtectedRoute';

import './scss/style.scss';

import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import Logout      from './components/utility/Logout';
import VideosIndex from './components/videos/VideosIndex';
import VideoNew    from './components/videos/AddVideo.js';
import VideosShow    from './components/videos/VideosShow.js';
// import Auth from './lib/Auth';

class App extends React.Component {

  render() {
    return(
      <Router>
        <div className="container">
          <Logout />
          <Switch>
            {/* <Route exact path="/videos" component={VideosIndex} />
            <ProtectedRoute path="/videos/new" component={VideosNew} /> */}
            <ProtectedRoute path="/user/:id/edit" component={UserEdit} />
            <ProtectedRoute path="/user/:id" component={UserShow} />
            <ProtectedRoute path="/videos/new" component={VideoNew} />
            <ProtectedRoute path="/videos/:id" component={VideosShow} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/" component={VideosIndex} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

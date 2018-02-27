import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import UserShow from './components/users/userShow';
import UserEdit from './components/users/userEdit';
import ProtectedRoute from './components/utility/ProtectedRoute';

import './scss/style.scss';

import Login       from './components/auth/login';
import Register    from './components/auth/register';
import Navbar      from './components/Navbar';

class App extends React.Component {

  render() {
    return(
      <Router>
        <div className="container">
          <Switch>
            {/* <Route exact path="/videos" component={VideosIndex} />
            <ProtectedRoute path="/videos/new" component={VideosNew} /> */}
            <ProtectedRoute path="/user/:id/edit" component={UserEdit} />
            <ProtectedRoute path="/user/:id" component={UserShow} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          <Navbar />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import UserShow from './components/users/userShow';
import UserEdit from './components/users/userEdit';
import ProtectedRoute from './components/utility/ProtectedRoute';

import './scss/style.scss';

import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
// import Logout      from './components/utility/Logout';
import VideosIndex from './components/videos/VideosIndex';
import VideoNew    from './components/videos/AddVideo.js';
import VideosShow    from './components/videos/VideosShow.js';
// import Auth from './lib/Auth';

class App extends React.Component {

  render() {
    return(
      <Router>
        <div className="container">
          <ProtectedRoute exact path="/new" component={VideoNew} />
          <ProtectedRoute exact path="/user/:id/edit" component={UserEdit} />
          <ProtectedRoute exact path="/user/:id" component={UserShow} />
          <Route path="/videos/:videoId" render={(router) => {
            if(router.match.isExact) {
              const asOverlay = router.location.state && router.location.state.showVideoOverlay;
              return <VideosShow asOverlay={asOverlay} {...router} />;
            }
            return null;
          }} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/" render={(router) => {
            let forceRender = false;
            try {
              forceRender = router.location.state.showVideoOverlay && router.location.state.from === 'VideosIndex';
            } catch (e) {
              forceRender = false;
            }

            if (router.match.isExact || forceRender) {
              return <VideosIndex {...router} />;
            }
            return null;
          }} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

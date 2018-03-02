import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';


const Logout = ({ history }) => {
  function logout(e){
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <div>
      { Auth.isAuthenticated() && <Link to={`/user/${Auth.getPayload().userId}`} className="button">Profile</Link>}
      {' '}
      { Auth.isAuthenticated() && <a href="#" className="button" onClick={logout}>Logout</a>}

      {/* <Link to="/" className="button">Home</Link>
      {' '} */}
    </div>
  );
};

export default withRouter(Logout);

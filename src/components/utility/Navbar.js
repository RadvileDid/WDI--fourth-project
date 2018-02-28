import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';


const Navbar = ({ history }) => {
  function logout(e){
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav>
      { !Auth.isAuthenticated() && <Link to="/login" className="button">Login</Link> }
      {' '}
      { !Auth.isAuthenticated() && <Link to="/register" className="button">Register</Link>}
      {' '}
      { Auth.isAuthenticated() && <Link to={`/user/${Auth.getPayload().userId}`} className="button">Profile</Link>}
      {' '}
      <Link to="/" className="button">Home</Link>
      {' '}
      { Auth.isAuthenticated() && <a href="#" className="button" onClick={logout}>Logout</a>}
    </nav>
  );
};

export default withRouter(Navbar);

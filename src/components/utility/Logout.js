import React from 'react';
import { withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';


const Logout = ({ history }) => {
  function logout(e){
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <div className="logout">
      { Auth.isAuthenticated() && <a href="#" className="button cancel" onClick={logout}>Logout</a>}
    </div>
  );
};

export default withRouter(Logout);

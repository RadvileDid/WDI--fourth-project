import React from 'react';

import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => {
  return(
    <button onClick={ history.goBack } className="button cancel buttonBack">
      <img className="icon"/>
    </button>
  );
};

export default withRouter(BackButton);

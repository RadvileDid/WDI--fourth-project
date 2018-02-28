import React from 'react';

import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => {
  return(
    <button onClick={ history.goBack } className="button backButton"><i className="fa fa-lg fa-arrow-left"></i></button>
  );
};

export default withRouter(BackButton);

import React from 'react';

import BackButton from '../utility/BackButton';

function EditForm({ handleSubmit, handleChange, user }) {
  return (
    <div className="singleComponentBox">
      <form onSubmit={handleSubmit}  className="formContainer">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="formInput"
          />
        </div>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="formInput"
          />
        </div>
        <div>
          <input
            type="text"
            id="profilePicture"
            name="profilePicture"
            placeholder="Add your profile picture"
            value={user.profilePicture}
            onChange={handleChange}
            className="formInput"
          />
        </div>
        <div className="buttonsBox">
          <button className="button success"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5IDQ5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OSA0OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxwYXRoIGQ9Ik0zOS45MTQsMEgzNy41aC0yOGgtOXY0OWg3aDMzaDhWOC41ODZMMzkuOTE0LDB6IE0zNS41LDJ2MTRoLTI0VjJIMzUuNXogTTkuNSw0N1YyOGgyOXYxOUg5LjV6IE00Ni41LDQ3aC02VjI2aC0zM3YyMWgtNSAgIFYyaDd2MTZoMjhWMmgxLjU4Nkw0Ni41LDkuNDE0VjQ3eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTEzLjUsMzNoN2MwLjU1MywwLDEtMC40NDcsMS0xcy0wLjQ0Ny0xLTEtMWgtN2MtMC41NTMsMC0xLDAuNDQ3LTEsMVMxMi45NDcsMzMsMTMuNSwzM3oiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0yMy41LDM1aC0xMGMtMC41NTMsMC0xLDAuNDQ3LTEsMXMwLjQ0NywxLDEsMWgxMGMwLjU1MywwLDEtMC40NDcsMS0xUzI0LjA1MywzNSwyMy41LDM1eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTI1Ljc5LDM1LjI5Yy0wLjE4MSwwLjE4OS0wLjI5LDAuNDUtMC4yOSwwLjcxczAuMTA5LDAuNTIsMC4yOSwwLjcxQzI1Ljk3OSwzNi44OSwyNi4yMjksMzcsMjYuNSwzNyAgIGMwLjI2LDAsMC41Mi0wLjExLDAuNzEtMC4yOWMwLjE4LTAuMTksMC4yOS0wLjQ1LDAuMjktMC43MXMtMC4xMS0wLjUyMS0wLjI5LTAuNzFDMjYuODQsMzQuOTIsMjYuMTYsMzQuOTIsMjUuNzksMzUuMjl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMzMuNSw0aC02djEwaDZWNHogTTMxLjUsMTJoLTJWNmgyVjEyeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" className="icon"/></button>
          <BackButton />
        </div>
      </form>
    </div>
  );
}

export default EditForm;

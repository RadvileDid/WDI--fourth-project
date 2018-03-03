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
          <button className="button success">Save</button>
          <BackButton />
        </div>
      </form>
    </div>
  );
}

export default EditForm;

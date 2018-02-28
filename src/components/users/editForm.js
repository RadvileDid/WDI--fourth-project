import React from 'react';

import BackButton from '../utility/BackButton';

function EditForm({ handleSubmit, handleChange, user }) {
  return (
    <div className="singleComponentBox">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile image</label>
          <input
            type="text"
            id="profilePicture"
            name="profilePicture"
            value={user.profilePicture}
            onChange={handleChange}
          />
        </div>
        <div className="buttonsBox">
          <button className="button">Save</button>
          <BackButton />
        </div>
      </form>
    </div>
  );
}

export default EditForm;

import React from 'react';

function EditForm({ handleSubmit, handleChange, user }) {
  return (
    <div>
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
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;

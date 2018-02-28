import React from 'react';

import BackButton from '../utility/BackButton';


const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  console.log('inside of the register form:', errors);


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={user.name}
          className="form-control"
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
          className="form-control"
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="form-group">
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="profilePicture"
          placeholder="Add your profile image.."
          onChange={handleChange}
          value={user.profilePicture}
          className="form-control"
        />
        {errors.profilePicture && <p>{errors.profilePicture}</p>}
      </div>
      <div className="buttonsBox">
        <button className="button" disabled={formIsInvalid}>Let's register</button>
        <BackButton />
      </div>
    </form>
  );
};

export default RegisterForm;

import React from 'react';
import BackButton from '../utility/BackButton';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  // console.log('inside of the register form:', errors);

  return (
    <form onSubmit={handleSubmit} className="formContainer register">
      <div className="form-group">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name..."
          onChange={handleChange}
          value={user.name}
          className="formInput"
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username..."
          onChange={handleChange}
          value={user.username}
          className="formInput"
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="formInput"
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
          className="formInput"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="form-group">
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Password confirmation"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="formInput"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="profilePicture"
          placeholder="Add your profile image.."
          onChange={handleChange}
          value={user.profilePicture}
          className="formInput"
        />
        {errors.profilePicture && <p>{errors.profilePicture}</p>}
      </div>
      <div className="buttonsBox">
        <button className="button success" disabled={formIsInvalid}>Register</button>
        <BackButton />
      </div>
    </form>
  );
};

export default RegisterForm;

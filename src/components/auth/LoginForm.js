import React from 'react';
import BackButton from '../utility/BackButton';

const LoginForm = ({ handleChange, handleSubmit, user, errors }) => {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <div className="form-group">
        <input
          type="text"
          name="email"
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
      <div className="buttonsBox">
        <button className="button formSubmitButton" disabled={formIsInvalid}>Login</button>
        <BackButton />
      </div>
    </form>
  );
};

export default LoginForm;

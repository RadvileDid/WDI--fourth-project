import React from 'react';
import BackButton from '../utility/BackButton';

const LoginForm = ({ handleChange, handleSubmit, user, errors }) => {
  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div>
      <div className="formBackButton"><BackButton /></div>
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
        <div className="buttonsBox loginButtons">
          <button className="button login" disabled={formIsInvalid}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

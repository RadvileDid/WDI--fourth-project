import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="buttonsBox loginButtons">
        <button className="button login" disabled={formIsInvalid}>Login</button>
        <Link to="/" className="button addVideo closeLogin"><i className="fas fa-times"></i></Link>
      </div>
    </form>
  );
};

export default LoginForm;

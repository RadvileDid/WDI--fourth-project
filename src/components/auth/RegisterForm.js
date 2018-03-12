import React from 'react';
import BackButton from '../utility/BackButton';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);
  // console.log('inside of the register form:', errors);

  return (
    <div>
      <div className="formBackButton"><BackButton /></div>
      <form onSubmit={handleSubmit} className="formContainer registerForm">
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
          {errors.name && <p className="error">{errors.name}</p>}
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
          {errors.username && <p  className="error">{errors.username}</p>}
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
          {errors.email && <p  className="error">{errors.email}</p>}
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
          {errors.password && <p  className="error">{errors.password}</p>}
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
          {errors.passwordConfirmation && <p  className="error">{errors.passwordConfirmation}</p>}
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
          {errors.profilePicture && <p className="error">{errors.profilePicture}</p>}
        </div>
        <div className="buttonsBox loginButtons">
          <button className="button login" disabled={formIsInvalid}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

import React, { useState } from 'react';
import { login, logout } from '../store';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [newUserName, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const minUsernameLength = 2;
  const minPasswordLength = 8;

  const onLogin = () => {
    if (newUserName.length >= minUsernameLength && newPassword.length >= minPasswordLength) {
      let path = `/`;
      dispatch(login({ username: newUserName, password: newPassword }));
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="nav text-center">
        <Link to="/login">
          <p className="btn btn-ghost normal-case text-xl">another todo app</p>
        </Link>
      </div>

      <div className="wrapper max-w-sm mx-auto flex justify-center flex-wrap mt-8">
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            onChange={(e) => setNewUsername(e.target.value)}
            type="text"
            placeholder="Email or login"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mb-8">
          <label className="label">
            <span className="label-text">What is your password?</span>
          </label>
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-primary btn-wide mb-4" onClick={() => onLogin()}>
          Log in
        </button>
        <button className="btn btn-secondary btn-wide" onClick={() => dispatch(logout())}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;

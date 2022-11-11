import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div className="navbar flex flex-wrap justify-between w-full bg-base-100">
      <Link to="/">
        <p className="btn btn-ghost normal-case text-xl">another todo app</p>
      </Link>
      <ul className="menu menu-horizontal">
        <li>
          <Link to="/done">Done</Link>
        </li>
        <li>
          <Link to="/login">{username ? 'Logout' : 'Login'}</Link>
        </li>
        {username && <li className="ml-6">{`Hello, ${username}`}</li>}
      </ul>
    </div>
  );
};

export default Navbar;

// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../useAuth';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <>
          <Link to="/protected">Protected</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;

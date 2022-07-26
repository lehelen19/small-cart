/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="row block center">
      <h1>Hijinks and Wahoos</h1>
      <p>Shipping is free for orders over $250.00!</p>
      <nav>
        <li className="navbar">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar">
          <Link to="/">
            Cart
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default Header;

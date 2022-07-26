import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="row block center">
      <nav>
        <li className="navbar">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar">
          <Link to="/cart">Cart</Link>
        </li>
      </nav>
    </header>
  );
}

export default Header;

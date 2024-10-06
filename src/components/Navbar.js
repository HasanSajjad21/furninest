// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FurniNest</div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true}>Home</Link></li>
        <li><Link to="products" smooth={true}>Products</Link></li>
        <li><Link to="blog" smooth={true}>Blog</Link></li>
        <li><Link to="contact" smooth={true}>Contact</Link></li>
      </ul>
      <div className="auth-buttons">
        <button className="btn cart">🛒</button>
        <button className="btn login">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;

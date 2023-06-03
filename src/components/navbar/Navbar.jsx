import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          My Logo
        </a>
        <button
          className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
          onClick={toggleNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
          <a className="navbar-item" href="/about">
            About
          </a>
          <a className="navbar-item" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


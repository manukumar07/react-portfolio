
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
// import { useState } from 'react'


const Navbar = () => {

  return (
    <>
      <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Portfolio..</h1>
        </div>
        <div className='nav-elements'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact-us</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
};

export default Navbar;

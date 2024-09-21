import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <nav className="bg-[#34495E] text-white py-4 shadow-lg fixed w-full z-10 top-0 pr-4">
      <div className="container mx-auto flex justify-between items-center px-2">
        {/* Logo or Brand Name */}
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-[#E67E22]">PORTFOLIO</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-[#2980B9] font-bold">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#2980B9] font-bold">
            About
          </Link>
          <Link to="/skills" className="hover:text-[#2980B9] font-bold">
            Skills
          </Link>
          <Link to="/projects" className="hover:text-[#2980B9] font-bold">
            Projects
          </Link>
          <Link to="/experience" className="hover:text-[#2980B9] font-bold">
            Experience
          </Link>
          <Link to="/contact" className="hover:text-[#2980B9] font-bold">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {nav ? (
            <FaTimes size={30} className="text-[#E67E22]" />
          ) : (
            <FaBars size={30} className="text-[#E67E22]" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-[#34495E] text-center space-y-6 py-6`}
      >
        <li>
          <Link
            to="/"
            className="block text-lg hover:text-[#2980B9]"
            onClick={handleClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block text-lg hover:text-[#2980B9]"
            onClick={handleClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="block text-lg hover:text-[#2980B9]"
            onClick={handleClick}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="block text-lg hover:text-[#2980B9]"
            onClick={handleClick}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/experience"
            className="block text-lg hover:text-[#2980B9]"
            onClick={handleClick}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block text-lg hover:text-[#2980B9]"
            onClick={handleClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

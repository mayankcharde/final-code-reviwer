

import { Link } from "react-router-dom";
import React, { useState } from "react";
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="navbar bg-gradient-to-r from-black to-gray-700 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-green-400">Code Reviewer</div>
        
        {/* Mobile Menu Button */}
        {/* <button className="text-white md:hidden" onClick={toggleMenu}> */}
          {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button> */}

        {/* Desktop Menu */}
        <div className={`md:flex space-x-8 gap-3 ${isOpen ? "block" : "hidden"} md:block`}>
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />
          <NavLink to="/register" label="Register" />
        </div>
      </div>
    </nav>
  );
}

// Reusable Link Component
const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
  >
    {label}
  </Link>
);
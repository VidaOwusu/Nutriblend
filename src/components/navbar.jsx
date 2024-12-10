import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png';

const NavBar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-white fixed w-full top-0 z-10">
      {/* Logo (Link to Home) */}
      <div id="logo-container">
        <Link to="home" smooth={true} offset={-70} duration={500}>
          <img src={logo} alt="Logo" className="w-auto h-12 cursor-pointer" />
        </Link>
      </div>

      {/* Links (Desktop Navigation) */}
      <div className="hidden md:flex gap-8">
        <Link
          to="home"
          smooth={true}
          offset={-70}
          duration={500}
          className={`text-black ${
            activeSection === 'home' ? 'text-pink-400' : 'hover:text-pink-400'
          }`}
        >
          Home
        </Link>
        <Link
          to="about-us"
          smooth={true}
          offset={-70}
          duration={500}
          className={`text-black ${
            activeSection === 'about-us'
              ? 'text-pink-400'
              : 'hover:text-pink-400'
          }`}
        >
          About
        </Link>
        <Link
          to="products"
          smooth={true}
          offset={-70}
          duration={500}
          className={`text-black ${
            activeSection === 'products'
              ? 'text-pink-400'
              : 'hover:text-pink-400'
          }`}
        >
          Products
        </Link>
        <Link
          to="contact-us"
          smooth={true}
          offset={-70}
          duration={500}
          className={`text-black ${
            activeSection === 'contact-us'
              ? 'text-pink-400'
              : 'hover:text-pink-400'
          }`}
        >
          Contact
        </Link>
        <button className="border border-pink-400 text-black px-4 py-2 hover:bg-pink-400 hover:text-white">
          Get Started
        </button>
      </div>

      {/* Hamburger Menu (Mobile Navigation) */}
      <div className="md:hidden" onClick={toggleMenu}>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </div>

      {/* Mobile Menu (when hamburger is clicked) */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 right-0 bg-white p-5 md:hidden`}
      >
        <Link
          to="home"
          smooth={true}
          offset={-70}
          duration={500}
          className="block text-black py-2 hover:text-pink-400"
        >
          Home
        </Link>
        <Link
          to="about-us"
          smooth={true}
          offset={-70}
          duration={500}
          className="block text-black py-2 hover:text-pink-400"
        >
          About
        </Link>
        <Link
          to="products"
          smooth={true}
          offset={-70}
          duration={500}
          className="block text-black py-2 hover:text-pink-400"
        >
          Products
        </Link>
        <Link
          to="contact-us"
          smooth={true}
          offset={-70}
          duration={500}
          className="block text-black py-2 hover:text-pink-400"
        >
          Contact
        </Link>
        <button className="border border-pink-400 text-black px-4 py-2 w-full hover:bg-pink-400 hover:text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

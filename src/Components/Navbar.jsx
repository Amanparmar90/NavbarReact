import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='navbar-container'>
      <img src={logo} alt="" className='logo-img' />
      <ul className={`nav-links ${nav ? 'open' : ''}`}>
        <li><input type="text" placeholder="Mumabi Central Railway,mu..." /></li>
        <li className="subscribe-btn"><button className="custom-button">Subscribed</button></li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
      <div onClick={handleNav} className='menu-icon'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={`mobile-nav ${nav ? 'open' : ''}`}>
        <li><img src={logo} alt="" className='logo-img' /></li>
        <li><input type="text" placeholder="Mumabi Central Railway,mu..." /></li>
        <li className="subscribe-btn"><button className="custom-button">Subscribed</button></li>
        <li className="LOGIN">Login</li>
        <li className="LOGIN">Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;

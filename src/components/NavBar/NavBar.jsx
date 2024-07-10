/*=============
    NAVBAR
=============*/
// src/components/NavBar/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-full.svg';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/"><img className="nav__logo" src={logo} alt="logo" /></a>
      <ul className='nav__links'>
        <li className='nav__link'>
          <Link className='nav__link-a' to="/projects">Projects</Link>
        </li>
        <li className='nav__link'>
          <Link className='nav__link-a' to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

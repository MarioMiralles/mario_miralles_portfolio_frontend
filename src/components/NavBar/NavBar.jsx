/*=============
    NAVBAR
=============*/
// src/components/NavBar/NavBar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-full.svg';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/"><img className="nav__logo" src={logo} alt="logo" /></a>
      <ul className='nav__links'>
        <li className='nav__link'>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'nav__link-a nav__link-a--active' : 'nav__link-a'
            }>Projects</NavLink>
        </li>
        <li className='nav__link'>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav__link-a nav__link-a--active' : 'nav__link-a'
            }>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
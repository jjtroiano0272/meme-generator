import React, { useState, useContext, useRef } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useHotkeys } from 'react-hotkeys-hook';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from './ThemeProvider';
import Tooltip from '@mui/material/Tooltip';
import $ from 'jquery';
import logo from '../image/logoipsum-logo-39.svg';

export default function Navbar({ user }) {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const inputRef = useRef(null);

  // Switch theme
  useHotkeys(
    'cmd+/, ctrl+/',
    () => {
      toggleDarkMode();
    },
    [toggleDarkMode]
  );

  // Focus search box
  useHotkeys(
    'cmd+k, ctrl+k',
    () => {
      inputRef.current.focus();
    },
    [inputRef]
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-light mb-4 sbl-1'>
      <div className='container'>
        <NavLink to='/' className='navbar-brand'>
          <img src={logo} alt='Brand logo' id='nav-logo' />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/ml-memes' className='nav-link'>
                {/* TODO: This will be kinda randomly generated text, to be whimsical */}
                No, show me some AI-generated memes!
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/my-profile' className='nav-link'>
                My Profile
              </Link>
            </li>

            <li className='nav-item'>
              <a className='nav-link disabled' href='#'>
                {/* Conditional logic here or private-users only stuff */}
                Disabled
              </a>
            </li>
          </ul>

          <form className='form-inline my-2 my-lg-0 ms-md-auto'>
            <input
              className='form-control mr-sm-2'
              type='search'
              ref={inputRef}
              placeholder='Search'
              aria-label='Search'
            />
          </form>

          <Tooltip
            title={
              !darkMode
                ? 'Switch theme to dark mode'
                : 'Switch theme to light mode'
            }
          >
            <button
              onClick={toggleDarkMode}
              className='btn btn-lg my-2 my-sm-0'
              data-tip
              data-for='lightDarkModeTip'
              type='checkbox'
            >
              {darkMode === true ? '🔆' : '🌙'}
            </button>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
}

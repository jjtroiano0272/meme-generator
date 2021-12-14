import React, { useState, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from '../image/logoipsum-logo-39.svg';
// import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navbar({ user, darkMode, toggleDarkMode }) {
  const inputRef = useRef(null);

  // Switch theme
  useHotkeys('CTRL+\\, CMD+\\', () => {
    console.log('Switch theme');
    toggleDarkMode();
  });

  // Focus on search box
  useHotkeys('CTRL+/, CMD+/', () => {
    inputRef.current.focus();
    console.log('search box focused');
  });

  return (
    <nav className='navbar navbar-expand-lg nav-bg sb-1'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img src={logo} alt='Website logo' />
        </a>
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
            {/* <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li> */}
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Link
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' href='#'>
                Disabled
              </a>
            </li>
          </ul>

          <form className='form-inline my-2 my-lg-0 ms-auto'>
            <span className='d-inline-block float-left'>
              {/* <span className='d-inline-block float-left'> */}
              <DarkModeSwitch
                className='react-darkMode-switch'
                checked={darkMode}
                onClick={toggleDarkMode}
                size={'1.8rem'}
              />
              {/* </span> */}
            </span>
            <span className='d-inline-block'>
              <input
                className='form-control search-query mr-sm-2'
                type='search'
                ref={inputRef}
                placeholder='Search'
                aria-label='Search'
              />
            </span>

            {/* <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
}

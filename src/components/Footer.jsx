import React, { useState } from 'react';
import { CaretDoubleUp } from 'phosphor-react';
import logo from '../image/logoipsum-logo-39.svg';

export default function Footer(props) {
  return (
    <div className='container'>
      <footer className='pt-4 pt-md-5 border-top'>
        <div className='row'>
          <div className='col-6'>
            <a className='navbar-brand' href='#'>
              <img className='mb-3 o-3' src={logo} alt='Website logo' />
              <small className='d-block mb-2 text-secondary'>
                © 2021 J. Troiano
              </small>
            </a>
          </div>
          <div className='col-6 text-end'>
            <a
              href='https://portfolio-page-vite-6r4.pages.dev/'
              className='pointer'
            >
              View Profile
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='row text-center'>
            <a href='#' className='mb-4 pointer'>
              <CaretDoubleUp style={{ size: '2rem' }} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

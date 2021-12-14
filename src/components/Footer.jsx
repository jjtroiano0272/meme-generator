import React, { useState } from 'react';
import { CaretDoubleUp } from 'phosphor-react';
import logo from '../image/logoipsum-logo-39.svg';

export default function Footer(props) {
  return (
    <div className='container'>
      <footer className='pt-4 pt-md-5 border-top'>
        <div className='row'>
          <a className='navbar-brand' href='#'>
            <img className='mb-3 o-3' src={logo} alt='Website logo' />
          </a>
        </div>

        <div className='d-flex'>
          <div>
            <small className='text-secondary mb-2'>© 2021 J. Troiano</small>
          </div>

          <div className='ms-auto'>
            <a
              href='https://portfolio-page-vite-6r4.pages.dev/'
              className='pointer'
            >
              View Profile
            </a>
          </div>
        </div>
        <div className='row text-center'>
          <a href='#' className='mb-4 pointer'>
            <CaretDoubleUp style={{ size: '2rem' }} />
          </a>
        </div>
      </footer>
    </div>
  );
}

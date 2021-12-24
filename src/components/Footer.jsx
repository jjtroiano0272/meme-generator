import React, { useState, useEffect } from 'react';
import { CaretDoubleUp } from 'phosphor-react';
import logo from '../image/logoipsum-logo-39.svg';

export default function Footer(props) {
  useEffect(() => {}, []);
  return (
    <footer className='footer mt-5'>
      <div className='container'>
        <div>
          <p>
            <small className='text-secondary mb-2'>© 2021 J. Troiano</small>
          </p>
        </div>
        <div className='ms-auto'>
          <p>
            <a
              href='https://portfolio-page-vite-6r4.pages.dev/'
              className='pointer text-secondary'
            >
              View Profile
            </a>
          </p>
        </div>

        <div className='row text-center'>
          <a href='#' className='mb-4 pointer'>
            <CaretDoubleUp style={{ size: '2rem' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

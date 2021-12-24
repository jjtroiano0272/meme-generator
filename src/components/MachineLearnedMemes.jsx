import React, { useState, useEffect, useCallback } from 'react';
import Footer from './Footer';
import Tooltip from '@mui/material/Tooltip';

export default function MachineLearnedMemes({ src, numPosts }) {
  const axios = require('axios');
  const apiEndpoint = `https://www.reddit.com/r/${src}.json?limit=${numPosts}`;
  const [loadComplete, setLoadComplete] = useState(false);
  const [currentMeme, setCurrentMeme] = useState();

  async function getData() {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    // data.data.children is the array of all objects. Get length here.
    const randomIndex = Math.floor(Math.random() * data.data.children.length);
    setCurrentMeme(data.data.children[randomIndex].data); // this now contains an object we'll parse through at call
    setLoadComplete(true);
  }

  useEffect(() => {
    getData();
  }, []);

  const getNewMeme = () => {
    getData();
  };

  return (
    <>
      <div className='container'>
        <h3 className='text-center my-4'></h3>
        <button
          className='btn btn-primary my-3 container-fluid'
          onClick={getNewMeme}
        >
          Give me a new meme!
        </button>
        {loadComplete ? (
          <img src={currentMeme.url} alt='' className='img-fluid rounded' />
        ) : null}
      </div>
      <Footer />
    </>
  );
}

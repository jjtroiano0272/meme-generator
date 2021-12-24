import React, { useEffect, useState } from 'react';
import Footer from './Footer';

export default function Main(props) {
  // Make a request for a user with a given ID
  // axios
  //   .get(apiEndpoint)
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });

  // useEffect(() => {
  //   // TODO: Replace me with axios?
  //   fetch(apiEndpoint).then((res) => {
  //     if (res.status != 200) {
  //       console.log('Whoopsie poopsie!');
  //       return;
  //     }

  //     res.json().then((data) => {
  //       if (data != null) {
  //         setMemes(data.data.children);
  //       }
  //     });
  //   });
  // }, []);

  const axios = require('axios');
  const apiEndpoint = `https://api.imgflip.com/get_memes`;
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch(apiEndpoint);
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getNewMeme() {
    const randNum = Math.floor(Math.random() * allMemes.length);
    const randMemeImg = allMemes[randNum].url;

    // Keeps the previous text, gets new image
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randMemeImg,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  const { topText, bottomText, randomImage } = meme;

  return (
    <>
      <div className='container'>
        <div className='form-group mb-4 mt-2'>
          <label className='text-muted' htmlFor='memeTopTextForm'>
            Top text
          </label>

          <input
            type='text'
            className='form-control search-query'
            id='memeTopTextForm'
            aria-describedby='Meme top text'
            placeholder={`I'm a meme`}
            name='topText'
            value={topText}
            onChange={handleChange}
          />
        </div>
        <div className='form-group mb-2'>
          <label className='text-muted' htmlFor='memeBottomTextForm'>
            Bottom text
          </label>
          <input
            type='text'
            placeholder='So give me text, pls'
            className='form-control search-query'
            name='bottomText'
            value={bottomText}
            onChange={handleChange}
          />
        </div>
        <button
          className='btn btn-primary my-3 container-fluid'
          onClick={getNewMeme}
        >
          Give me a new meme!
        </button>
        <div className='row position-relative'>
          <img src={randomImage} className='img-fluid rounded mw-100' />
          <h2 className='caption top'>{topText}</h2>
          <h2 className='caption bottom'>{bottomText}</h2>
        </div>
      </div>

      <Footer />
    </>
  );
}

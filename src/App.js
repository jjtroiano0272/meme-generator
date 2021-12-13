import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
// import './App.css';
// import { Navbar } from 'react-bootstrap';

export default function App() {
  const [darkMode, setDarkMode] = useState(() =>
    JSON.parse(localStorage.getItem('DARK_MODE'))
  );

  const toggleDarkMode = () => {
    localStorage.setItem('DARK_MODE', !darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('DARK_MODE', darkMode);
  }, [darkMode]);

  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main />
      <Footer />
      {/* <Switch>
        <Route path='/panda' component={Panda} />
        <Route path='/gorilla' component={Gorilla} />
        <Route path='/rhino' component={Rhino} />
        <Route path='/seaTurtle' component={SeaTurtle} />
        <Route path='/' component={Home} />
      </Switch> */}
    </div>
  );
}

import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import Home from './components/Home';
import Footer from './components/Footer';
import MachineLearnedMemes from './components/MachineLearnedMemes';
import UserProfile from './components/UserProfile';
// import UserProfile from './components/UserProfile';
import { ThemeContext } from './components/ThemeProvider';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';

export default function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/ml-memes'
          element={<MachineLearnedMemes src='inspirobot' numPosts={50} />}
        />
        <Route path='/my-profile' element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

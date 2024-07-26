// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Header';
import Login from './components/Login';
import Inscription from './components/Inscription';
import Home1 from './components/Home1';
import Partie1 from './components/Partie1';
import Avatar from './components/Avatar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/Headers" element={<Headers />} />
        <Route path="/home" element={<Home1 />} />
        <Route path="/partie1" element={<Partie1 />} />
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
    </Router>
  );
};

export default App;

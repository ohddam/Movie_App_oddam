import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return ( //path가 주소고(경로) 이주소에 이 컴포넌트를 불러오라고,라우트는 반드시 Browserrouter로 묶어줘야한다. 
    <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/about" element={<About />} />
      <Route path="movie_detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

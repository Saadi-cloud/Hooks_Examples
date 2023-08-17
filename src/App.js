import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Use_navigation_hook from './Components/Use_navigation_hook';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Use_navigation_hook/>}></Route>
        <Route exact path='/about' element={<About/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

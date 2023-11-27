//import React, { useState } from "react";
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Aboutus from './components/pages/Aboutus';
import Download from './components/pages/Download';

function App() {
  
  <div className="App">
      
  </div>
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/Download' element={<Download/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

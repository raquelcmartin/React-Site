import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element=
        {<Home/>}/>
      </Routes>
    </Router>

  
    </>
  );
}

export default App;

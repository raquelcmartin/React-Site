import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>

  
    </>
  );
}

export default App;

import React from 'react';
import '../App.css';
import Button from './Button';
import '../style/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>HI I'M RAQUEL, A SOFTWARE ENGINEER</h1>
      <p>Welcome to my personal website!</p>
      <div className="hero-btns">
        <Button 
        className="btns" 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            GET STARTED
        </Button>
        <Button 
        className="btns" 
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
            WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection

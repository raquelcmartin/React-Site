import React from 'react'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>HI I'M RAQUEL, A SOFTWARE ENGINEER</h1>
      <p>Welcome to my personal website!</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle='btn--outline'
        buttonSize='btn--large'>GET STARTED</Button>
      </div>
    </div>
  )
}

export default HeroSection

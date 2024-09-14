import React from 'react';
import CardItem from './CardItem';
import '../../style/Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>Welcome to my personal website!</h1>
        <div className="cards__container">
           <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src="profilePic.jpeg"
                text="About Me"
                label="Raquel Martin"
                path='/about'
                // Need to update ^
                />
                <CardItem 
                src="capstonehome.png"
                text="Portfolio"
                label="See my Projects"
                path='/portfolio'
                // Need to update ^
                />
                </ul>
                <CardItem 
                src="contactme.jpeg"
                text="Contact Me"
                label="Let's work together!"
                path='/contact'
                // Need to update ^
                />
            </div> 
        </div>
    </div>
  )
}

export default Cards

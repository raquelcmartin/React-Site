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
                src="../../assets/img-2.jpg"
                text="About Me"
                label="Raquel Martin"
                path='/home'
                // Need to update ^
                />
                <CardItem 
                src="../../assets/img-3.jpg"
                text="Portfolio"
                label="See my Projects"
                path='/home'
                // Need to update ^
                />
                </ul>
                <CardItem 
                src="../../assets/img-4.jpg"
                text="Contact Me"
                label="Let's work together!"
                path='/home'
                // Need to update ^
                />
            </div> 
        </div>
    </div>
  )
}

export default Cards

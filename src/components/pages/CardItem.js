import React from 'react';
import { Link } from 'react-router-dom';

function CardItem() {
  return (
   <>
   <li className="cards_item">
    <Link className="cards_item_link">
        <figure className="cards_item_pic-wrap">

        </figure>
    </Link>
   </li>
   </>
  )
}

export default CardItem

import React from 'react';
import ReactStars from 'react-stars';

const CardData = (props) => {
  return (
    <div className='Card'>
            <img
            className="rounded "
            src={props.imageUrl}
            width={300}
            height={300}
            alt="men"
          />
            <p>{props.name}</p>
            <ReactStars
              count={5}
              size={24}
              color2={'#ffd700'} />
            <p>{props.price}</p>
          </div>
  )
}

export default CardData

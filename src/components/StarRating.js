import React from 'react';
import {MdVerified} from 'react-icons/md';

const StarRating = ({ rating }) => {

  const stars = [];

  for (let i = 1; i <= 5; i++) {

    let starClassName;
    
    if (i <= rating) {
      starClassName = 'text-yellow-400';
    } else {
      starClassName = 'text-gray-300';
    }
    stars.push(

      <span key={i} className={`text-xl ${starClassName}`}>
        <MdVerified />
      </span>

    );
  }
  return <div className="flex items-center">{stars}</div>;
};

export default StarRating;

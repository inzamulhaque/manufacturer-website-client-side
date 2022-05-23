import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
    const { name, ratingMsg, rating } = review || {};
    return (
        <>
            <div className="flex items-center justify-center shadow-lg rounded-lg py-4 dark:bg-white">
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-[45px] text-orange-500" />
                </div>
                <div className='pl-2'>
                    <h4 className="text-[22px] font-bold">{name}</h4>
                    <p className="text-[18px] font-medium">{ratingMsg}</p>
                    <p className='flex items-center'>Rating: <Rating initialRating={parseFloat(rating)} readonly fullSymbol={<img src="https://dreyescat.github.io/react-rating/assets/images/star-full.png" alt='Rating Image' className="icon" />} /> {rating}</p>
                </div>
            </div>
        </>
    );
};

export default Review;
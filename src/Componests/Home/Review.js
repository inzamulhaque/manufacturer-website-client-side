import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
    const { name, text, rating } = review || {};
    return (
        <>
            <div className="flex items-center justify-center shadow-lg rounded-lg py-4">
                <div>
                    <FontAwesomeIcon icon={faStar} className="text-[45px] text-orange-500" />
                </div>
                <div className='pl-2'>
                    <h4 className="text-[22px] font-bold">{name}</h4>
                    <p className="text-[18px] font-medium">{text}</p>
                    {
                        [...Array(Math.round(rating))].map((rating, index) => <FontAwesomeIcon key={index} icon={faStar} className="text-[18px] text-orange-500" />)
                    }
                </div>
            </div>
        </>
    );
};

export default Review;
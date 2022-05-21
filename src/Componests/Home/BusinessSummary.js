import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faScrewdriverWrench, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {
    return (
        <>
            <div className="my-2">
                <h3 className="text-[25px] font-bold text-center text-orange-400 my-3">Our Clients Trush Us</h3>
                <div className="rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className='py-3 text-center shadow-xl my-2 lg:my-0'>
                            <FontAwesomeIcon icon={faFlag} className="text-[30px] text-orange-400" />
                            <h3 className="text-[25px] font-bold">23</h3>
                            <h3 className="text-[25px] font-bold">Countries</h3>
                        </div>

                        <div className='py-3 text-center shadow-xl my-2 lg:my-0'>
                            <FontAwesomeIcon icon={faScrewdriverWrench} className="text-[30px] text-orange-400" />
                            <h3 className="text-[25px] font-bold">19</h3>
                            <h3 className="text-[25px] font-bold">Tools</h3>
                        </div>

                        <div className='py-3 text-center shadow-xl my-2 lg:my-0'>
                            <FontAwesomeIcon icon={faUsers} className="text-[30px] text-orange-400" />
                            <h3 className="text-[25px] font-bold">311+</h3>
                            <h3 className="text-[25px] font-bold">Happy Clients</h3>
                        </div>

                        <div className='py-3 text-center shadow-xl my-2 lg:my-0'>
                            <FontAwesomeIcon icon={faStar} className="text-[30px] text-orange-400" />
                            <h3 className="text-[25px] font-bold">1345+</h3>
                            <h3 className="text-[25px] font-bold">rating</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessSummary;
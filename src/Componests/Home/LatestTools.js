import React from 'react';
import Tool from '../Shared/Tool';

const LatestTools = () => {
    return (
        <>
            <div className="my-4">
                <h3 className="text-[25px] font-bold text-orange-500 text-center">Latest Tool</h3>
                <div className="mx-auto w-full md:w-1/2 lg:w-1/3">
                    <Tool />
                </div>
            </div>
        </>
    );
};

export default LatestTools;
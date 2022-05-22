import React from 'react';
import spinner from '../../images/spinner.gif'

const Loading = () => {
    return (
        <>
            <div className="h-50vh w-3/4 flex justify-center items-center mx-auto">
                <div className="h-3/4 md:h-full w-full md:w-1/3">
                    <img src={spinner} alt="Loading" className="h-full w-full" />
                </div>
            </div>
        </>
    );
};

export default Loading;
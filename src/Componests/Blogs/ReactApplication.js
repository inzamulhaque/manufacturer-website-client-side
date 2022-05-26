import React from 'react';

const ReactApplication = () => {
    return (
        <>
            <div className="p-3 rounded-lg shadow-lg my-2 dark:bg-white">
                <h3 className="text-[25px] font-bold">How will you improve the performance of a React Application?</h3>
                <p className="text-[20px] font-medium">
                    To optimize react application performance we need to prevent components from unnecessary re-renders. We can use optimized images or lazy loading images too. Code-splitting also plays a great role in react application performance.
                </p>
            </div>
        </>
    );
};

export default ReactApplication;
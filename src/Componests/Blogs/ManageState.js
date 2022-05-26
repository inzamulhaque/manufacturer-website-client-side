import React from 'react';

const ManageState = () => {
    return (
        <>
            <div className="p-3 rounded-lg shadow-lg my-2 dark:bg-white">
                <h3 className="text-[25px] font-bold">What are the different ways to manage a state in a React application?</h3>
                <p className="text-[20px] font-medium">
                    Local state, Global state, Server state, URL state,
                </p>
                <p className="text-[20px] font-medium">
                    <span className="font-b">Global (UI) state</span> – Global state is data we manage across multiple components.
                    <span className="font-b">Server state</span> – Data that comes from an external server that must be integrated with our UI state.
                    <span className="font-b">URL state</span> - Data that exists on our URLs, including the pathname and query parameters.
                </p>
            </div>
        </>
    );
};

export default ManageState;
import React, { useEffect, useState } from 'react';
import Tool from '../Shared/Tool';

const LatestTools = () => {
    const [tool, setTool] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/homeitem?limit=1")
            .then(res => res.json())
            .then(data => setTool(data[0]));
    }, []);
    return (
        <>
            <div className="my-4">
                <h3 className="text-[25px] font-bold text-orange-500 text-center">Latest Tool</h3>
                <div className="mx-auto w-full md:w-1/2 lg:w-1/3">
                    <Tool tool={tool} />
                </div>
            </div>
        </>
    );
};

export default LatestTools;
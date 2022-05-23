import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PayNow = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('jotToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setTool(data));
    }, [id]);

    return (
        <>
            <div className="container mx-auto">
                <h4 className="dark:text-white text-[22px] font-bold">Hi! <span className="text-orange-500">{tool.name}</span>,</h4>
                <h4 className="dark:text-white text-[22px] font-bold">Please Pay For <span className="text-orange-500">{tool.itemName}</span> </h4>
            </div>
        </>
    );
};

export default PayNow;
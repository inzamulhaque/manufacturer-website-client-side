import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from 'recharts';

const StockSummary = () => {
    const [stock, setStock] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/stocksummary")
            .then(res => res.json())
            .then(data => setStock(data));
    }, [])


    return (
        <>
            <div className="my-4 rounded-lg shadow-lg">
                <h3 className="mb-2 text-[25px] text-center text-orange-500 font-bold">Stock Summary</h3>

                <div className="mx-auto w-full md:w-3/4 lg:w-1/2 shadow-md">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={stock}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="availableQty" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default StockSummary;
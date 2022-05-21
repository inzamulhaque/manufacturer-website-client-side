import React, { useState } from 'react';
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend } from 'recharts';

const StockSummary = () => {
    const [stock, setStock] = useState([
        { _id: 1, name: "name", stock: 700 },
        { _id: 2, name: "name", stock: 900 },
        { _id: 3, name: "name", stock: 990 },
        { _id: 4, name: "name", stock: 750 },
        { _id: 5, name: "name", stock: 990 }
    ]);

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
                            <Line type="monotone" dataKey="stock" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default StockSummary;
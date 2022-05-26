import React, { useEffect, useState } from 'react';
import Tool from '../Componests/Shared/Tool';

const AllItems = () => {
    const [items, setItems] = useState([]);

    // get all items
    useEffect(() => {
        fetch("https://ih-electronics.herokuapp.com/item")
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        items?.map(item => <Tool key={item._id} tool={item} />)
                    }
                </div>
            </div>
        </>
    );
};

export default AllItems;
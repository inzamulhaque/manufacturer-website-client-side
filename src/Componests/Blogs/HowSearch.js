import React from 'react';

const HowSearch = () => {
    return (
        <>
            <div className="p-3 rounded-lg shadow-lg my-2 dark:bg-white">
                <h3 className="text-[25px] font-bold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p className="text-[20px] font-medium">
                    const products =[

                    &#123;name: 'laptop',brand: "HP",color:'silver',price: 33000	&#125;,
                    &#123;name: 'phone',brand: "Oppo",color:'silver',price: 21000	&#125;,
                    &#123;name: 'phone',brand: "iphone",color:'silver',price: 45000	&#125;
                    ]
                    <span>
                        const spacificName = products.filter( product =&#62; product.name.toLowerCase().includes("hp"));
                    </span>
                </p>
            </div>
        </>
    );
};

export default HowSearch;
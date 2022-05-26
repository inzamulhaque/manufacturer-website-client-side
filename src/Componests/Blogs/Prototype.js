import React from 'react';

const Prototype = () => {
    return (
        <>
            <div className="p-3 rounded-lg shadow-lg my-2 dark:bg-white">
                <h3 className="text-[25px] font-bold">How does prototypical inheritance work?</h3>
                <p className="text-[20px] font-medium">
                    In javascript every object with its methods and properties contains an internal and hidden property known as [[Prototype]].In javascript a feature used to add methods and properties in objects whinch is prototypical inheritence. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using _proto_.
                </p>
            </div>
        </>
    );
};

export default Prototype;
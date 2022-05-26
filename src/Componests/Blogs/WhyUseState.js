import React from 'react';

const WhyUseState = () => {
    return (
        <>
            <div className="p-3 rounded-lg shadow-lg my-2 dark:bg-white">
                <h3 className="text-[25px] font-bold">Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h3>
                <p className="text-[20px] font-medium">
                    useState is a Hook that allows us to set the state of variables in functional components. When we pass the initial state to the function by useState, it returns a variable with the current state value (not necessarily the initial state) and returns another function to update this value. But if we set the state of a variable as mentioned in the question it returns a variable with the initial state it does not return any other function to update the value of the variable.
                </p>
            </div>
        </>
    );
};

export default WhyUseState;
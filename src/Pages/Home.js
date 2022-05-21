import React from 'react';
import PageTitle from '../Componests/PageTitle/PageTitle';
import Banner from '../Componests/Home/Banner';
import Tools from '../Componests/Home/Tools';
import BusinessSummary from '../Componests/Home/BusinessSummary';
import Reviews from '../Componests/Home/Reviews';
import StockSummary from '../Componests/Home/StockSummary';

const Home = () => {
    return (
        <>
            <PageTitle title={"Home"} />
            <div className="container mx-auto">
                <Banner />
                <Tools />
                <BusinessSummary />
                <Reviews />
                <StockSummary />
            </div>
        </>
    );
};

export default Home;
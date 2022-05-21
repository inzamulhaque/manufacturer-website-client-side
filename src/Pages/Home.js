import React from 'react';
import PageTitle from '../Componests/PageTitle/PageTitle';
import Banner from '../Componests/Home/Banner';
import Tools from '../Componests/Home/Tools';
import BusinessSummary from '../Componests/Home/BusinessSummary';

const Home = () => {
    return (
        <>
            <PageTitle title={"Home"} />
            <div className="container mx-auto">
                <Banner />
                <Tools />
                <BusinessSummary />
            </div>
        </>
    );
};

export default Home;
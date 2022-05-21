import React from 'react';
import PageTitle from '../Componests/PageTitle/PageTitle';
import Banner from '../Componests/Home/Banner';

const Home = () => {
    return (
        <>
            <PageTitle title={"Home"} />
            <div className="container mx-auto">
                <Banner />
            </div>
        </>
    );
};

export default Home;
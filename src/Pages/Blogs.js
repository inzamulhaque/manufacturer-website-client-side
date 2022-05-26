import React from 'react';
import ManageState from '../Componests/Blogs/ManageState';
import Prototype from '../Componests/Blogs/Prototype';
import ReactApplication from '../Componests/Blogs/ReactApplication';
import WhyUseState from '../Componests/Blogs/WhyUseState';
import HowSearch from '../Componests/Blogs/HowSearch';
import UnitTest from '../Componests/Blogs/UnitTest';
import PageTitle from '../Componests/PageTitle/PageTitle';

const Blogs = () => {
    return (
        <>
            <PageTitle title={"Blogs"} />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <ReactApplication />
                    <ManageState />
                    <Prototype />
                    <WhyUseState />
                    <HowSearch />
                    <UnitTest />
                </div>
            </div>
        </>
    );
};

export default Blogs;
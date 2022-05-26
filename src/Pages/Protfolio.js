import React from 'react';
import PageTitle from '../Componests/PageTitle/PageTitle';
import Header from '../Componests/Protfolio/Header';
import Projects from '../Componests/Protfolio/Projects';
import Skills from '../Componests/Protfolio/Skills';

const Protfolio = () => {
    return (
        <>
            <PageTitle title={"Protfolio"} />
            <div className="container mx-auto">
                <Header />
                <Skills />
                <Projects />
            </div>
        </>
    );
};

export default Protfolio;
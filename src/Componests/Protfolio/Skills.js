import React from 'react';

const Skills = () => {
    return (
        <>
            <div className="mx-auto rounded-lg shadow-lg md:w-3/4 lg:w-1/2 my-5 bg-white p-3">
                <h2 className="text-[28px] font-bold">Skills</h2>
                <div className="px-2">
                    <h4 className="text-[22px] font-medium">
                        <span className="font-bold">FRONT END: </span>
                        React, JavaScript (ES6), Css, Tailwind CSS, Bootstrap 5, HTML
                    </h4>
                    <h4 className="text-[22px] font-medium">
                        <span className="font-bold">BACKEND: </span>
                        JavaScript, Express Js, Node Js
                    </h4>
                    <h4 className="text-[22px] font-medium">
                        <span className="font-bold">DataBase: </span>
                        MongoDB
                    </h4>
                    <h4 className="text-[22px] font-medium">
                        <span className="font-bold">Tools: </span>
                        Git, Firebase, Heroku, NPM, VS Code, Figma
                    </h4>
                </div>
            </div>
        </>
    );
};

export default Skills;
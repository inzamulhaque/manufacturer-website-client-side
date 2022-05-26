import React from 'react';

const Projects = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="rounded-lg shadow-lg p-3 bg-white">
                    <div className="w-full h-[250px]">
                        <img src="https://i.ibb.co/1KkGbth/haque-grocerys-firebaseapp-com.png" alt="iamge" className="w-full h-full" />
                    </div>
                    <a href="https://haque-grocerys.firebaseapp.com/" className="text-[20px] font-medium py-2" target="_blank">Haque Grocerys</a>
                </div>

                <div className="rounded-lg shadow-lg p-3 bg-white">
                    <div className="w-full h-[250px]">
                        <img src="https://i.ibb.co/DRy8DfW/fitness-guru-assignment-10-web-app.png" alt="iamge" className="w-full h-full" />
                    </div>
                    <a href="https://fitness-guru-assignment-10.web.app/" className="text-[20px] font-medium py-2" target="_blank">Fitness Guru</a>
                </div>

                <div className="rounded-lg shadow-lg p-3 bg-white">
                    <div className="w-full h-[250px]">
                        <img src="https://i.ibb.co/86S26s7/assignment-9-ih-phero-netlify-app.png" alt="iamge" className="w-full h-full" />
                    </div>
                    <a href="https://assignment-9-ih-phero.netlify.app/" className="text-[20px] font-medium py-2" target="_blank">Best Laptop</a>
                </div>
            </div>
        </>
    );
};

export default Projects;
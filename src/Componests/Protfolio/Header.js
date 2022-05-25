import React from 'react';

const Header = () => {
    return (
        <>
            <div className="mx-auto md:w-3/4 lg:w-1/2 rounded-lg shadow-lg p-3">
                <h2 className="dark:text-white text-[28px] font-bold">MD Inzamul Haque</h2>
                <h3 className="dark:text-white text-[25px] font-medium">mdihalif@gmail.com</h3>
                <h3 className="dark:text-white text-[25px] font-medium">Educational Information:</h3>
                <div className="my-3 overflow-x-auto">
                    <table className="table-auto border-collapse border-2 border-slate-400 w-full dark:text-white">
                        <thead>
                            <tr>
                                <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Examination Name</th>
                                <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Subject</th>
                                <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    BBA
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    Accounting
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    2019-2024 (Expected)
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    HSC
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    Study of Business
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    2019
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    SSC
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    Study of Business
                                </td>
                                <td className='text-center border md:border-2 border-slate-300 md:py-1 md:px-2'>
                                    2017
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Header;
import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className={`bg-black w-full py-2 md:py-3 lg:py-5`}>
            <p className="text-center text-[18px] text-white">
                copyright &copy; {year} || <a href="https://web.facebook.com/mdihalif.2002/" className='text-center text-[18px] text-white' target={"_blank"}>MD IH Alif</a>
            </p>
        </footer>
    );
};

export default Footer;
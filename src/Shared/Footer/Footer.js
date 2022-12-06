import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
           
        <div className=" xl:px-20 lg:px-12 sm:px-6 px-4 px-4 py-12 bg-primary">
            <div className="flex flex-col items-center justify-center">
                <div className='text-white text-4xl font-semibold'>
                   BookExpress
                </div>
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                    <Link to="/" className="focus:underline focus:outline-none text-base cursor-pointer leading-4 text-white ">Home</Link>
                    <Link href="/allcategory" className="focus:underline focus:outline-none text-base cursor-pointer leading-4 text-white ">All Category</Link>
                    <Link href="/contact" className="focus:underline focus:outline-none text-base cursor-pointer leading-4 text-white ">Contact Us</Link>
                    <Link href="/blog" className="focus:underline focus:outline-none text-base cursor-pointer leading-4 text-white ">Blog</Link>
                </div>
               
                <div className="flex items-center mt-6">
                    <p className="text-base leading-4 text-white">2022 <span className="font-semibold"></span></p>
                    <div className="border-l border-white pl-2 ml-2">
                        <p className="text-base leading-4 text-white">Inc. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    
        </div>
    );
};

export default Footer;
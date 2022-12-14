import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
    return (
        <div>
            
        <div class="2xl:mx-auto dark:bg-gray-900 2xl:container md:px-20 px-4 md:py-12 py-9">
            <div class="relative rounded-md">
                <img src="https://i.postimg.cc/gcCL6956/library-banner.jpg" alt="city view" class="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden" />
                <img src="https://i.ibb.co/LQpxBsc/mobile.png" alt="city view" class="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                <div class="text-xl relative z-20 bg-gradient-to-r from-secondary to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                    <div>
                        <h1 class="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">Winter Sale 30% off!</h1>
                        <p class="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age.</p>
                    </div>
                    <div class="md:mt-12 mt-20">
                        <button class="bg-primary text-base font-medium leading-4 text-white bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-white"><Link to="/contact">Contact Us</Link></button>
                    </div>
                </div>
            </div>
        </div>
    
        </div>
    );
};

export default Cta;
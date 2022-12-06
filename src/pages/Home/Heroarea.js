import React from 'react';
import Ad from './Ad';
const Heroarea = () => {
    return (
        <div className=''>
            

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.postimg.cc/xCvpBBkN/2.jpg")` }}>
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-left text-white lg:mr-auto lg:ml-24">
                    <div className="">
                    <h1 className="mb-5 text-7xl font-bold">Books in Store</h1>
                    <p className="mb-5 text-2xl">Sale up to 30% off</p>
                    <button className="btn btn-primary text-white hover:bg-secondary border border-none">Shopping now!</button>
                    </div>
                </div>
            </div>
            <Ad></Ad>
        </div>
    );
};

export default Heroarea;
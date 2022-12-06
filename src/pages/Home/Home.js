import React from 'react';
import Categories from '../Categories/Categories';
import Cta from '../Cta/Cta';
import Review from '../Review/Review';
import Heroarea from './Heroarea';

const Home = () => {
    return (
        <div>
            <Heroarea></Heroarea>
            <Categories></Categories>
            <Review></Review>
            <Cta></Cta>
        </div>
    );
};

export default Home;
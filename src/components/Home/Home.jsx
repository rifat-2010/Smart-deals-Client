import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import HomeBanner from './HomeBanner';


const latestProductsPromise = fetch('http://localhost:3000/latest-products').then(res => res.json());
const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
        </div>
    );
};

export default Home;